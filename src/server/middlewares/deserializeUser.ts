import { TRPCError } from "@trpc/server";
import { NextApiRequest, NextApiResponse } from "next";
import { verifyJwt } from "../utils/jwt";
import { authConfig } from "../config/auth";
import { prisma } from "@/libs/prisma";

async function deserializeUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get the token
    let access_token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      access_token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.access_token) {
      access_token = req.cookies.access_token;
    }

    const notAuthenticated = {
      user: null,
    };

    if (!access_token) {
      return notAuthenticated;
    }

    // Validate Access Token
    const decoded = verifyJwt<{ id: number }>(
      access_token,
      authConfig.jwtSecret
    );

    if (!decoded) {
      return notAuthenticated;
    }

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) {
      return notAuthenticated;
    }

    return {
      user,
    };
  } catch (error: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
}

export default deserializeUser;
