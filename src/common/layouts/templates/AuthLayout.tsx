import { userAtom } from "@/store/user";
import { useAtom, useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  const [user] = useAtom(userAtom);
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    router.push("/");
  }, [user, router]);

  return <>{children}</>;
};

export default AuthLayout;
