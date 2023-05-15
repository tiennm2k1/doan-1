import { FC } from "react";

interface IntroductionProps {}

const features = [
  {
    image: "/assets/images/new1.webp",
    title: "Đặt khám lâm sàng",
    description:
      "Bệnh nhân chủ động chọn thông tin đặt khám (ngày khám và giờ khám)",
  },
  {
    image: "/assets/images/new2.webp",
    title: "Thanh toán dễ dàng",
    description: "Người dùng chọn và thực hiện thanh toán trên phần mềm",
  },
  {
    image: "/assets/images/new3.webp",
    title: "Nhận phiếu trực tuyến",
    description: "Bệnh nhân sẽ nhận phiếu khám trực tuyến ngay trên phần mềm",
  },
];

const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <>
      <div
        className="pt-16 text-white pb-24 px-3 bg-cover"
        style={{ backgroundImage: "url(/assets/images/introduction_bg.svg)" }}
      >
        <div className="flex w-full max-w-[1140px] mx-auto">
          <div className="flex-shrink-0 w-[35%]">
            <span className="tracking-[3px] text-[#9bf4cf] uppercase font-medium text-[10px]">
              GIỚI THIỆU
            </span>
            <h2 className="mt-2 text-3xl font-medium">
              MEDPRO
              <br />
              Đặt lịch khám bệnh
            </h2>
          </div>
          <p>
            <b>Medpro</b> là giải pháp đặt lịch khám bệnh, chăm sóc sức khỏe
            trực tuyến cho cả gia đình. Người dùng chủ động trong việc khám chữa
            bệnh, được lựa chọn dịch vụ, chuyên khoa, bác sĩ tại các bệnh viện
            và phòng khám hàng đầu Việt Nam như Bệnh viện Đại học Y Dược TP.HCM,
            Bệnh viện Chợ Rẫy, Bệnh viện Nhi Đồng Thành Phố.
          </p>
        </div>
      </div>

      <div className="w-full py-8 m-auto max-w-[1140px] grid grid-cols-3 gap-6">
        {features.map((feature, index) => {
          return (
            <div key={index} className="relative">
              <div className="rounded overflow-hidden shadow bg-white px-4">
                <img
                  className="w-full object-cover"
                  src={feature.image}
                  alt=""
                />
              </div>

              <div
                className="bg-white relative p-4 transition-all duration-300 ease-in-out mt-[-45px] mx-[8%] hover:mt-[-54px]"
                style={{ boxShadow: "0 5px 35px rgba(0,0,0,.1)" }}
              >
                <h4 className="text-center text-lg font-medium">
                  {feature.title}
                </h4>
                <p className="text-sm mt-2 tracking-[1px]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Introduction;
