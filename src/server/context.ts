import { prisma } from "@/libs/prisma";
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import deserializeUser from "./middlewares/deserializeUser";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  const { user } = await deserializeUser(opts.req, opts.res);

  return {
    ...opts,
    prisma,
    user,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
