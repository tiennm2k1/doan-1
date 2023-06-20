import { PrismaClient } from "@prisma/client";

export namespace global {
  prisma: PrismaClient;
}
