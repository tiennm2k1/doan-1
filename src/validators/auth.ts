import { z } from "zod";

export const registerValidator = z
  .object({
    username: z
      .string({ required_error: "Tên đăng nhập là bắt buộc" })
      .min(3, "Tên đăng nhập phải lớn hơn 3 ký tự"),
    email: z
      .string({ required_error: "Email là bắt buộc" })
      .email("Email không hợp lệ"),
    password: z
      .string({ required_error: "Mật khẩu là bắt buộc" })
      .min(8, "Mật khẩu ko thể ít hơn 8 ký tự")
      .max(30, "Mật khẩu không được vượt quá 30 ký tự"),
  })
  .strict();

export const loginValidator = z
  .object({
    email: z
      .string({ required_error: "Email là bắt buộc" })
      .email("Email không hợp lệ"),
    password: z
      .string({ required_error: "Mật khẩu là bắt buộc" })
      .min(8, "Mật khẩu ko thể ít hơn 8 ký tự")
      .max(30, "Mật khẩu không được vượt quá 30 ký tự"),
  })
  .strict();
