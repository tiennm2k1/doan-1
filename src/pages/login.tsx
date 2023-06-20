import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface loginProps {}

const LoginPage: FC<loginProps> = ({}) => {
  const router = useRouter();

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

              <form className="w-full mt-10">
                <div className="mb-6">
                  <input
                    className="w-full border border-[#cacaca] leading-6 py-3 px-4 rounded"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="w-full border border-[#cacaca] leading-6 py-3 px-4 rounded"
                    type="password"
                    placeholder="Mật khẩu"
                  />
                </div>

                <button className="py-3 px-4 bg-[#1da1f2] w-full rounded text-white">
                  Đăng nhập
                </button>
              </form>

              <div className="mt-10 w-full">
                <p className="text-center text-sm">
                  Hoặc đăng nhập bằng tài khoản
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
                  Chưa có tài khoản? Tạo tài khoản mới tại{" "}
                  <Link className="text-[#1da1f2]" href="/register">
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

export default LoginPage;
