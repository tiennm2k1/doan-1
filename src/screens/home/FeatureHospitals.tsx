import { FC } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Autoplay } from "swiper";

interface FeatureHospitalsProps {}

const hospitals = [
  {
    image: "/assets/images/hospitals/1.jpg",
    name: "Bệnh viện nhi đồng 1",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/2.jpg",
    name: "Bệnh viện nhi đồng 1",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/3.jpg",
    name: "Bệnh viện nhi đồng 1",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/4.jpg",
    name: "Bệnh viện nhi đồng 1",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/5.jpg",
    name: "Bệnh viện nhi đồng 1",
    href: "#",
  },
  {
    image: "/assets/images/hospitals/6.jpg",
    name: "Bệnh viện nhi đồng 1",
    href: "#",
  },
];

const FeatureHospitals: FC<FeatureHospitalsProps> = ({}) => {
  return (
    <div className="mt-10 w-full max-w-[1140px] relative mx-auto">
      <h3 className="text-center text-2xl mb-8 uppercase">
        hệ thống bệnh viện triển khai
      </h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        modules={[Autoplay]}
        speed={1200}
      >
        {hospitals.map((hospital, index) => (
          <SwiperSlide key={index} className="flex flex-col gap-4 items-center">
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
  );
};

export default FeatureHospitals;
