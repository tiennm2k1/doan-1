import { trpc } from "@/libs/trpc";
import { userAtom } from "@/store/user";
import { useAtom } from "jotai";
import { FC, useEffect } from "react";

interface AuthMiddlewareProps {
  children: React.ReactNode;
}

const AuthMiddleware: FC<AuthMiddlewareProps> = ({
  children,
}: AuthMiddlewareProps) => {
  // get auth user
  const [user, setUser] = useAtom(userAtom);
  const { refetch } = trpc.user.getMe.useQuery(undefined, {
    retry: false,
    enabled: false,
    onSuccess(data) {
      console.log(data.user);
      setUser(data.user as any);
    },
  });

  useEffect(() => {
    if (!localStorage.getItem("booking_care_token")) return;

    refetch();
  }, [refetch]);

  return <>{children}</>;
};

export default AuthMiddleware;
