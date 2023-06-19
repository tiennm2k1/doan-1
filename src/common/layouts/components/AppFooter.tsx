import { FC } from "react";

interface AppFooterProps {}

const AppFooter: FC<AppFooterProps> = ({}) => {
  return (
    <div className="w-full bg-[#F8FAFD] mt-14 border-t border-t-#dfe3eb">
      <div className="w-full max-w-[1140px] mx-auto py-4">
        <div className="w-full flex items-center justify-between gap-3">
          <img src="/assets/images/logo5.png" className="w-[250px]" alt="" />
          <ul className="text-sm flex flex-col gap-[14px]">
            <li className="text-[#0352cc] font-medium">
              MEDPRO - ĐẶT LỊCH KHÁM BỆNH
            </li>
            <li>Địa chỉ: 97 Trần Quang Diệu, Phường 14, Quận 3</li>
            <li>Website: https://pkh.vn</li>
            <li>Email: contact@pkh.vn</li>
            <li>Điện thoại: (028) 710 78098</li>
          </ul>
          <ul className="text-sm flex flex-col gap-[14px]">
            <li>Liên hệ</li>
            <li>Điều khoản dịch vụ</li>
            <li>Chính sách bảo mật</li>
            <li>Quy định sử dụng</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
