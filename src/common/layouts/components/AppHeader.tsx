import Link from "next/link";
import { FC } from "react";
import { AiFillMobile } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

interface AppHeaderProps {}

const links = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/",
  },
  {
    label: "Quy trình",
    href: "/",
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
  return (
    <div className="flex justify-center m-auto w-full">
      <div
        style={{ maxWidth: 1440 }}
        className="w-full flex justify-between items-center"
      >
        <Link href="/" className="block p-4">
          <img
            src="/assets/images/header_logo.svg"
            className="w-[200px]"
            alt="Logo"
          />
        </Link>
        <div className="flex p-4 flex-col">
          <div className="w-full p-3 flex flex-row gap-4 justify-end">
            <button className="flex items-center gap-[6px] rounded border-[0.5px] border-[#065eb3] py-2 px-4 text-[14px] text-[#065eb3]">
              <AiFillMobile className="text-lg" />
              <span>Tải ứng dụng</span>
            </button>

            <button
              className="flex items-center gap-[6px] rounded border-[0.5px] border-[#065eb3] py-2 px-4 text-[14px] text-white"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(3, 82, 204), rgb(11, 125, 241))",
              }}
            >
              <BiLogIn className="text-lg" />
              <span>Đăng nhập</span>
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
      </div>
    </div>
  );
};

export default AppHeader;
