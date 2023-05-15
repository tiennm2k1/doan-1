import { FC } from "react";

interface FeatureNewsProps {}

const news = [
  {
    title:
      "ƯU ĐÃI 30/4 - 1/5 | MIỄN PHÍ KHÁM TẦM SOÁT TIÊU HOÁ CHO KHÁCH HÀNG MEDPRO TẠI PHÒNG KHÁM DOCTOR CHECK",
    description: "27/04/2023, 10:11 - Trương Hoàng Nhân",
    href: "/",
    image: "/assets/images/news/1.webp",
  },
  {
    title:
      "BỆNH VIỆN NHI ĐỒNG 1 THÔNG BÁO LỊCH NGHỈ LỄ GIỖ TỔ HÙNG VƯƠNG, 30/04 & 01/05/2023",
    description: "26/04/2023, 09:17 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/2.webp",
  },
  {
    title:
      "BỆNH VIỆN MẮT THÀNH PHỐ HỒ CHÍ MINH THÔNG BÁO LỊCH NGHỈ LỄ GIỖ TỔ HÙNG VƯƠNG, 30/04 & 01/05/2023",
    description: "26/04/2023, 09:24 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/3.webp",
  },
  {
    title:
      "ƯU ĐÃI 30/4 - 1/5 | MIỄN PHÍ KHÁM TẦM SOÁT TIÊU HOÁ CHO KHÁCH HÀNG MEDPRO TẠI PHÒNG KHÁM DOCTOR CHECK",
    description: "26/04/2023, 09:40 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/4.webp",
  },
  {
    title:
      "ƯU ĐÃI 30/4 - 1/5 | MIỄN PHÍ KHÁM TẦM SOÁT TIÊU HOÁ CHO KHÁCH HÀNG MEDPRO TẠI PHÒNG KHÁM DOCTOR CHECK",
    description: "26/04/2023, 09:40 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/4.webp",
  },
  {
    title:
      "ƯU ĐÃI 30/4 - 1/5 | MIỄN PHÍ KHÁM TẦM SOÁT TIÊU HOÁ CHO KHÁCH HÀNG MEDPRO TẠI PHÒNG KHÁM DOCTOR CHECK",
    description: "26/04/2023, 09:40 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/4.webp",
  },
];

const FeatureNews: FC<FeatureNewsProps> = ({}) => {
  return (
    <div className="w-fll mt-12 mx-auto max-w-[1140px]">
      <h3 className="text-center text-2xl mb-8 uppercase">
        tin tức và sự kiện
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <h3 className="mt-4 mb-2 tracking-[1px] leading-6 text-sm font-bold">
              {item.title}
            </h3>
            <p className="text-sm text-[#777]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureNews;
