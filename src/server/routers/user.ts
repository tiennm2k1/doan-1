import authenticate from "../middlewares/authenticate";
import { procedure, router } from "../trpc";

const userRouter = router({
  getMe: procedure.use(authenticate).query(({ ctx }) => {
    return {
      user: ctx.user,
    };
  }),
});

export default userRouter;
