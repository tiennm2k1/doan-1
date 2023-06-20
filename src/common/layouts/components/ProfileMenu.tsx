import { openProfileMenuAtom } from "@/store/ui";
import { userAtom } from "@/store/user";
import { genImageUrl } from "@/utils/get-image-url";
import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import Link from "next/link";
import { FC, MouseEvent, useRef } from "react";
import { useEventListener } from "usehooks-ts";

interface ProfileMenuProps {
  onClickOutside: (e: MouseEvent<HTMLDivElement>) => void;
}

const menus = [
  {
    label: "Hồ sơ bệnh nhân",
    href: "/",
    icon: "item-1.svg",
  },
  {
    label: "Phiếu khám bệnh",
    href: "/",
    icon: "item-2.svg",
  },
  {
    label: "Thông tin cá nhân",
    href: "/profile",
    icon: "item-3.svg",
  },
];

const ProfileMenu: FC<ProfileMenuProps> = ({ onClickOutside }) => {
  const user = useAtomValue(userAtom);
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useAtom(openProfileMenuAtom);

  useEventListener("click", (e) => {
    console.log("abcsdkcdk");
    if (!menuRef.current?.contains(e.target as Node)) {
      onClickOutside(e as any);
    }
  });

  function handleLogout() {
    const currentOrigin = window.origin;

    localStorage.removeItem("booking_care_token");
    window.location.href = `${currentOrigin}/login`;
  }

  return (
    <div
      className={clsx(
        "absolute z-20 min-w-[110px] duration-300 ease-in-out top-full",
        {
          "opacity-0 invisible": !open,
        }
      )}
      ref={menuRef}
    >
      <div
        className="p-5 overflow-hidden rounded border border-[#dfe3eb] bg-white min-w-[300px]"
        style={{ boxShadow: "0 0 40px rgba(34,34,34,.2)" }}
      >
        <div className="flex items-center gap-[14px]">
          <img
            src={genImageUrl(
              user?.avatar,
              "/assets/images/default-avatar-black.svg"
            )}
            alt=""
          />
          <div>
            <p className="text-sm mb-1">Xin chào</p>
            <p className="text-sm font-semibold">{user?.username}</p>
          </div>
        </div>

        <hr className="border-t-[#c7d4e7] my-4" />

        <ul>
          {menus.map((item, index) => (
            <li
              style={{ color: "rgba(0,0,0,0.85)" }}
              className="w-full gap-2"
              key={index}
            >
              <Link
                href={item.href}
                className="flex items-center w-full py-2 gap-2 hover:text-[#1da1f2] duration-200"
              >
                <img src={`/assets/images/profile/${item.icon}`} alt="" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="border-t-[#c7d4e7] my-4" />

        <div
          style={{ color: "rgba(0,0,0,0.85)" }}
          className="w-full gap-2 flex"
        >
          <button
            onClick={handleLogout}
            className="flex items-center w-full py-2 gap-2"
          >
            <img src={`/assets/images/profile/item-4.svg`} alt="" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
