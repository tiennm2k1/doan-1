import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

interface BannerProps {}

const images = [
  {
    url: "/assets/images/banner.png",
  },
  {
    url: "/assets/images/banner-2.png",
  },
];

const services = [
  {
    url: "/assets/images/services/1.png",
    label: "Đặt khám tại cơ sở",
  },
  {
    url: "/assets/images/services/2.png",
    label: "Khám hậu Covid 19",
  },
  {
    url: "/assets/images/services/3.png",
    label: "Gói sức khỏe toàn diện",
  },
  {
    url: "/assets/images/services/4.png",
    label: "Xét nghiệm tại nhà",
  },
  {
    url: "/assets/images/services/5.png",
    label: "Thanh toán viện phí",
  },
];

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="w-full relative">
      <Swiper
        slidesPerGroup={1}
        loop
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        modules={[Autoplay]}
        speed={1200}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              className="w-full block h-[70vh] max-h-[678px] object-cover"
              src={image.url}
              alt="main-banner"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="absolute z-10 top-7 min-w-[300px] max-w-[1340px] right-[10%] bg-white p-4 rounded-lg"
        style={{
          boxShadow: "0 6px 24px 0 rgba(0,0,0,.05), 0 0 0 1px rgba(0,0,0,.08)",
        }}
      >
        <h2 className="uppercase text-center mb-5 font-bold text-xl">
          {" "}
          Chọn dịch vụ
        </h2>
        <div className="w-full grid grid-cols-3 gap-y-6 gap-x-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center max-w-[170px] flex-col gap-1"
            >
              <img
                className="object-cover w-11 aspect-square"
                src={service.url}
                alt=""
              />
              <h4 className="text-center px-4">{service.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
