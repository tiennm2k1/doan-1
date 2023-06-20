import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidator } from "@/validators/auth";
import FormError from "@/common/ui/FormError";

interface registerProps {}

type FormState = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage: FC<registerProps> = ({}) => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: zodResolver(registerValidator),
  });

  const onSubmit: SubmitHandler<FormState> = (values) => {
    console.log(values);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 min-h-screen">
        <div className="flex justify-center bg-[#F1EFF2]">
          <div className="w-full max-w-[450px] p-6">
            <div className="mb-8">
              <FaArrowLeft
                onClick={() => router.back()}
                className="cursor-pointer text-[#2698d6]"
              />
            </div>

            <div className="w-full flex flex-col items-center">
              <img
                src="/assets/images/logo5.png"
                alt=""
                className="w-[280px]"
              />

              <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
                <div className="mb-6">
                  <Controller
                    control={control}
                    name="username"
                    render={({ field }) => (
                      <input
                        className="w-full border border-[#cacaca] leading-6 py-3 px-4 rounded"
                        type="text"
                        placeholder="Tên tài khoản"
                        {...field}
                      />
                    )}
                  />
                  {errors.username?.message ? (
                    <FormError message={errors.username.message} />
                  ) : null}
                </div>
                <div className="mb-6">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <input
                        className="w-full border border-[#cacaca] leading-6 py-3 px-4 rounded"
                        type="text"
                        placeholder="Email"
                        {...field}
                      />
                    )}
                  />

                  {errors.email?.message ? (
                    <FormError message={errors.email.message} />
                  ) : null}
                </div>
                <div className="mb-6">
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <input
                        className="w-full border border-[#cacaca] leading-6 py-3 px-4 rounded"
                        type="password"
                        placeholder="Mật khẩu"
                        {...field}
                      />
                    )}
                  />
                  {errors.password?.message ? (
                    <FormError message={errors.password.message} />
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="py-3 px-4 bg-[#1da1f2] w-full rounded text-white"
                >
                  Đăng ký
                </button>
              </form>

              <div className="mt-10 w-full">
                <p className="text-center text-sm">
                  Hoặc đăng ký bằng tài khoản
                </p>
                <button className="flex rounded items-center justify-center gap-2 w-full mt-4 py-3 px-4 bg-[#ef5252]">
                  <img
                    className="w-6"
                    src="/assets/images/google-login.png"
                    alt=""
                  />
                  <span className="text-white uppercase text-xs">
                    Đăng nhập với google
                  </span>
                </button>
                <button className="flex rounded items-center justify-center gap-2 w-full mt-6 py-3 px-4 bg-[#293688]">
                  <img
                    className="w-6"
                    src="/assets/images/facebook-login.png"
                    alt=""
                  />
                  <span className="text-white uppercase text-xs">
                    Đăng nhập với facebook
                  </span>
                </button>

                <p className="text-center text-sm mt-8">
                  Đã có tài khoản? Đăng nhập tại{" "}
                  <Link className="text-[#1da1f2]" href="/login">
                    đây
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url(/assets/images/login-background.jpg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
