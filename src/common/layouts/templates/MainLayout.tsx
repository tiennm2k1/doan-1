import { FC } from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default MainLayout;
