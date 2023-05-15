import MainLayout from "@/common/layouts/templates/MainLayout";
import Banner from "@/screens/home/Banner";
import FeatureHospitals from "@/screens/home/FeatureHospitals";
import FeatureNews from "@/screens/home/FeatureNews";
import Introduction from "@/screens/home/Introduction";
import MobileApp from "@/screens/home/MobileApp";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

const HomePage: any = () => {
  return (
    <div className="wrapper">
      <Banner />
      <Introduction />
      <FeatureHospitals />
      <MobileApp />
      <FeatureNews />
    </div>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
