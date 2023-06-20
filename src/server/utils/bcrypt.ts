import bcryptjs from "bcryptjs";

export async function hashPw(password: string) {
  const salt = await bcryptjs.genSalt(12);
  return bcryptjs.hash(password, salt);
}

export async function verifyPw(password: string, hash: string) {
  return bcryptjs.compare(password, hash);
}
