import MainLayout from "@/common/layouts/templates/MainLayout";
import { ReactElement } from "react";

const ProcedurePage = ({}) => {
  return (
    <div className="w-full relative min-h-full">
      <div className="overflow-hidden">
        <img
          src="https://bo-api.medpro.com.vn:5000/static/images/medpro/web/bg_gioi_thieu.png?t=1111111"
          className="w-full h-64 object-center"
        />
      </div>
      <div className="absolute top-0 flex flex-col w-full items-center tracking-wide">
        <p className="text-4xl text-center mt-28 mb-16 text-white font-medium border-b-4 border-green-400">
          QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH
        </p>
      </div>
      <div className="mt-8 w-full flex flex-col items-center">
        <div className="flex tracking-wide relative" style={{width: "900px"}}>
          <div className="text-base text-left font-semibold text-blue-500 pt-8 pr-8 border-r-4 w-28">
            Bước 1
          </div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-9 left-[93px]"></div>
          <div className="w-full">
            <div className="text-base text-left pt-8 font-semibold text-blue-500 pl-8 ">
              ĐẶT LỊCH KHÁM
            </div>
            <ul className="pb-10 border-b-2 pl-8">
              <li className="mt-1">
                Đăng nhập phần mềm trên web hoặc ứng dụng di động.
              </li>
              <li className="mt-1">
                Chọn hình thức đặt khám: Theo ngày hoặc theo bác sĩ.
              </li>
              <li className="mt-1">
                Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới.
              </li>
              <li className="mt-1">
                Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và
                có BHYT hay không.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex tracking-wide relative" style={{width: "900px"}}>
          <div className="text-base text-left font-semibold text-blue-500 pt-8 pr-8 border-r-4 w-28">
            Bước 2
          </div>
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-9 left-[93px]"></div>
          <div className="w-full">
            <div className="text-base text-left pt-8 font-semibold text-blue-500 pl-8">
                THANH TOÁN TIỀN KHÁM
            </div>
            <ul className="pb-10 border-b-2 pl-8">
              <li className="mt-1">
                Chọn loại thẻ thanh toán: Thẻ khám bệnh, thẻ thanh toán quốc tế hoặc thẻ ATM nội địa hoặc ví điện tử.
              </li>
              <li className="mt-1">
                Kiểm tra tiền khám, các loại phí và tổng tiền thanh toán.
              </li>
              <li className="mt-1">
                Nhập thông tin thẻ để tiến hành thanh toán.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ProcedurePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ProcedurePage;
