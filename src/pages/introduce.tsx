import MainLayout from "@/common/layouts/templates/MainLayout";
import { ReactElement } from "react";

const IntroducePage = ({}) => {
  return (
    <div className="w-full relative">
      <div className="h-1/2 overflow-hidden">
        <img
          src="https://bo-api.medpro.com.vn:5000/static/images/medpro/web/bg_gioi_thieu.png?t=1111111"
          className="w-full transform -translate-y-1/2"
        />
      </div>
      <div className="absolute top-0 flex flex-col w-full items-center tracking-wide">
        <div className="text-4xl text-center mt-16 mb-16 text-white font-medium border-b-4 border-green-400">Giới thiệu</div>
        <div className="max-w-[1100px] bg-white p-8 rounded-lg border border-gray-300">
          <p>
            Chào mừng bạn đến với <b>Phần mềm Đăng ký khám bệnh theo hẹn tại
            Medpro</b>. Phần mềm này giúp người bệnh và thân nhân người bệnh có thể
            thực hiện trực tuyến quá trình đăng ký khám bệnh tại bệnh viện ở mọi
            lúc mọi nơi mà không cần phải đến trực tiếp bệnh viện, bao gồm các
            tiện ích trực tuyến sau đây:
          </p>
          <br />
          <ul className="ml-10">
            <li className="list-disc"> Đăng ký và chọn ngày, giờ khám bệnh.</li>
            <li className="list-disc"> Thanh toán chi phí khám bệnh không dùng tiền mặt.</li>
            <li className="list-disc"> Quản lý cuộc hẹn khám bệnh và tái khám</li>
            <li className="list-disc"> Quản lý thông tin, dữ liệu khám bệnh của người bệnh.</li>
          </ul>
          <br />
          <p>
            Với mong muốn không ngừng cải tiến, nâng cao chất lượng dịch vụ và
            làm tăng sự hài lòng của thân nhân và người bệnh, Chúng tôi hy vọng
            sẽ mang lại một phương thức giúp thân nhân và người bệnh có thể tiếp
            cận với các dịch vụ khám chữa bệnh tại bệnh viện một cách dễ dàng,
            nhanh chóng và thuận lợi nhất.
          </p>
          <br />
          <p>Trân trọng!</p>
        </div>
      </div>
    </div>
  );
};

IntroducePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default IntroducePage;
