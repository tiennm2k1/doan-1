import { prisma } from "@/libs/prisma";
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  return {
    ...opts,
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
