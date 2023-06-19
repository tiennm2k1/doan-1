import { FC } from "react";

interface SupportProps {}

const items = [
  {
    id: 1,
    title: "Hỗ trợ đặt khám",
    phone: "1900-2115",
    image: "/assets/images/support/support-1.svg",
  },
  {
    id: 2,
    title: "Hỗ trợ đặt khám",
    phone: "1900-2115",
    image: "/assets/images/support/support-1.svg",
  },
  {
    id: 3,
    title: "Hỗ trợ đặt khám",
    phone: "1900-2115",
    image: "/assets/images/support/support-1.svg",
  },
  {
    id: 4,
    title: "Hỗ trợ đặt khám",
    phone: "1900-2115",
    image: "/assets/images/support/support-1.svg",
  },
];

const Support: FC<SupportProps> = ({}) => {
  return (
    <div className="mt-20 w-full max-w-[1140px] mx-auto">
      <h2 className="text-center text-2xl mb-8 uppercase font-medium">
        Các hình thức hỗ trợ
      </h2>

      <div className="grid gap-5 grid-cols-4">
        {items.map((item) => (
          <div
            className="flex flex-col items-center justify-center border border-[#dfe3eb] py-12"
            key={item.id}
          >
            <img className="w-20" src={item.image} alt="" />
            <p className="text-[#12263f] mt-2 mb-[10px]">{item.title}</p>
            <p className="text-[#12263f] ">{item.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
