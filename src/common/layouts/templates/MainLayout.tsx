import { FC } from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

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
