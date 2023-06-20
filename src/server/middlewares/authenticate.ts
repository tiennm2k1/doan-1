import { TRPCError } from "@trpc/server";
import { middleware } from "../trpc";

const authenticate = middleware(async (opts) => {
  const { ctx } = opts;

  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next();
});

export default authenticate;
