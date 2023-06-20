import MainLayout from "@/common/layouts/templates/MainLayout";
import { FC, ReactElement } from "react";

const IntroducePage = ({}) => {
  return <div>Introduce Page</div>;
};

IntroducePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default IntroducePage;
