import { TRPCError } from "@trpc/server";
import { procedure, router } from "../trpc";
import { loginValidator, registerValidator } from "@/validators/auth";
import { hashPw, verifyPw } from "../utils/bcrypt";
import { signJwt } from "../utils/jwt";
import { authConfig } from "../config/auth";

const authRouter = router({
  register: procedure
    .input(registerValidator)
    .mutation(async ({ ctx, input }) => {
      const prisma = ctx.prisma;
      const exist = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (exist) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User đã tồn tại",
          cause: 29601,
        });
      }

      // hash password
      const hashedPw = await hashPw(input.password);

      await prisma.user.create({
        data: {
          email: input.email,
          username: input.username,
          password_hash: hashedPw,
        },
      });

      return {
        msg: "Success",
      };
    }),
  login: procedure.input(loginValidator).mutation(async ({ ctx, input }) => {
    const prisma = ctx.prisma;
    const exist = await prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!exist)
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Email hoặc mật khẩu không chính xác",
        cause: 29602,
      });

    const isPwMatch = await verifyPw(input.password, exist.password_hash);
    if (!isPwMatch)
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Email hoặc mật khẩu không chính xác",
        cause: 29602,
      });

    const token = signJwt({ id: exist.id }, authConfig.jwtSecret);

    return {
      token,
    };
  }),
});

export default authRouter;
