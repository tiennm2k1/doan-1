import { FC } from "react";

interface FeatureNewsProps {}

const news = [
  {
    title: "TIẾT KIỆM ĐƯỢC KHỐI TIỀN VỚI DỊCH VỤ TƯ VẤN KHÁM BỆNH TỪ XA ",
    description: "14/06/2023, 05:23pm - Thái Bình",
    href: "/",
    image: "/assets/images/news/1.jpg",
  },
  {
    title: "ĐIỀU DƯỠNG TẠI NHÀ - CHĂM SÓC SỨC KHỎE TẬN GỐC",
    description: "26/04/2023, 09:17 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/2.jpg",
  },
  {
    title: "BẢNG CÂN NẶNG THAI NHI QUA CÁC CHU KỲ",
    description: "20/06/2023, 09:24 - Trần Thị Dung",
    href: "/",
    image: "/assets/images/news/3.jpg",
  },
  {
    title: "ỨNG DỤNG BOOKING CARE ĐÃ CÓ MẶT TẠI BỆNH VIỆN XANHPON",
    description: "23/05/2023, 08:40 - NGUYEN QUAN",
    href: "/",
    image: "/assets/images/news/4.jpg",
  },
  {
    title:
      "TIÊM VACXIN TRƯỚC KHI SINH: NHỮNG MŨI TIÊM NÀO CẦN THIẾT CHO PHỤ NỮ",
    description: "6/3/2023, 12:07 - NGUYEN TIEN",
    href: "/",
    image: "/assets/images/news/5.jpg",
  },
  {
    title: "CHƯƠNG TRÌNH PHẪU THUẬT TỪ THIỆN “THẮP SÁNG NỤ CƯỜI TRẺ THƠ”",
    description: "21/5/2023, 9:24 - NGUYEN CAM",
    href: "/",
    image: "/assets/images/news/6.jpg",
  },
];

const FeatureNews: FC<FeatureNewsProps> = ({}) => {
  return (
    <div className="w-fll mt-16 mx-auto max-w-[1140px]">
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
