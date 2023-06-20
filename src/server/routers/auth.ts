import { TRPCError } from "@trpc/server";
import { procedure, router } from "../trpc";
import { registerValidator } from "@/validators/auth";
import { hashPw } from "../utils/bcrypt";

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
});

export default authRouter;
