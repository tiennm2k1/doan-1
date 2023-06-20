import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { AiFillMobile } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useElementSize } from "usehooks-ts";

interface AppHeaderProps {}

const links = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/introduce",
  },
  {
    label: "Quy trình",
    href: "/procedure",
  },
  {
    label: "Hướng dẫn",
    href: "/",
  },
  {
    label: "Tin tức",
    href: "/",
  },
  {
    label: "Thắc mắc",
    href: "/",
  },
  {
    label: "Liên hệ",
    href: "/",
  },
];

const AppHeader: FC<AppHeaderProps> = ({}) => {
  const [ref, size] = useElementSize();
  const router = useRouter();

  return (
    <>
      <div
        ref={ref}
        className="flex justify-center m-auto w-full "
        style={{ position: "fixed", zIndex: 99999, backgroundColor: "#fff" }}
      >
        <div
          style={{ maxWidth: 1400 }}
          className="w-full flex justify-between items-center"
        >
          <Link href="/" className="block p-4">
            <img
              src="/assets/images/logo5.png"
              className="w-[300px] ml-14"
              alt="Logo"
            />
          </Link>
          <div className="flex p-0 flex-col">
            <div className="w-full p-3 flex flex-row gap-4 justify-end">
              <button
                onClick={() => router.push("/login")}
                className="flex items-center gap-[6px] rounded border-[0.5px] border-[#065eb3] py-2 px-4 text-[14px] text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(3, 82, 204), rgb(11, 125, 241))",
                }}
              >
                <BiLogIn className="text-lg" />
                <span>Đăng nhập</span>
              </button>

              <button
                onClick={() => router.push("/register")}
                className="flex items-center gap-[6px] rounded border-[0.5px] border-[#065eb3] py-2 px-4 text-[14px] text-[#065eb3]"
              >
                <AiFillMobile className="text-lg" />
                <span>Đăng ký</span>
              </button>
            </div>

            <hr />

            <nav className="w-full flex px-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="block p-4 transition hover:text-[#065eb3] hover:opacity-80"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <img
              className="w-10"
              src={"/assets/images/icon_chat_2.svg"}
              alt=""
            />
            <div>
              <p>Bạn cần trợ giúp ?</p>
              <span className="font-semibold tracking-widest text-[#cb0a48]">
                1900-1234
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: size.height }}></div>
    </>
  );
};

export default AppHeader;
