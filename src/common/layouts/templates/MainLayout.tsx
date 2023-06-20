import { FC } from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1">{children}</div>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
