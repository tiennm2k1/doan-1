import { FC } from "react";

interface AppFooterProps {}

const AppFooter: FC<AppFooterProps> = ({}) => {
  return (
    <div className="w-full bg-[#F8FAFD] mt-14 border-t border-t-#dfe3eb">
      <div className="w-full max-w-[1140px] mx-auto py-8">
        <div className="w-full flex items-center justify-between gap-3 px-28">
          <img src="/assets/images/logo6.png" className="w-[130px] " alt="" />
          <ul className="text-sm flex flex-col gap-[14px]">
            <li className="text-[#0352cc] font-medium">
              BOOKING CARE - ĐẶT LỊCH KHÁM BỆNH
            </li>
            <li>Địa chỉ: 1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</li>
            <li>Website: https://pkh.vn</li>
            <li>Email: contact@pkh.vn</li>
            <li>Điện thoại: 0981.367.828</li>
          </ul>
          <ul className="text-sm flex flex-col gap-[14px]">
            <li className="cursor-pointer hover:text-[#658bc5]">Liên hệ</li>

            <li className="cursor-pointer hover:text-[#658bc5]">
              Điều khoản dịch vụ
            </li>

            <li className="cursor-pointer hover:text-[#658bc5]">
              Chính sách bảo mật
            </li>

            <li className="cursor-pointer hover:text-[#658bc5]">
              Quy định sử dụng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
