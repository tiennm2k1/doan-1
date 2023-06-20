import { FC } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Autoplay } from "swiper";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
interface FeatureHospitalsProps {}

const hospitals = [
  {
    image: "/assets/images/hospitals/1.jpg",
    name: "Bệnh viện Bạch Mai",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/2.jpg",
    name: "Bệnh viện Việt Đức",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/3.jpg",
    name: "Bệnh viện Quân đội 108",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/4.jpg",
    name: "Bệnh viện Thanh Nhàn",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/5.jpg",
    name: "Bệnh viện Xanhpon",
    href: "#",
  },
];

const FeatureHospitals: FC<FeatureHospitalsProps> = ({}) => {
  return (
    <div className="mt-10 w-full max-w-[1140px] relative mx-auto">
      <h3 className="text-center text-2xl mb-8 uppercase">
        hệ thống bệnh viện triển khai
      </h3>

      <div className="w-full relative">
        <button className="absolute top-1/2 -translate-y-[25px] -left-10 text-2xl">
          <FaChevronCircleLeft />
        </button>
        <button className="absolute top-1/2 -translate-y-[25px] -right-10 text-2xl">
          <FaChevronCircleRight />
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper"
          modules={[Autoplay]}
          speed={600}
        >
          {hospitals.map((hospital, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col gap-4 items-center"
            >
              <a className="block w-full" href={hospital.href}>
                <img
                  src={hospital.image}
                  className="w-full object-cover rounded-lg"
                  alt=""
                />

                <h3 className="text-center uppercase mt-4 text-lg">
                  {hospital.name}
                </h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureHospitals;
