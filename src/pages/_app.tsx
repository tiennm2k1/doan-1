import "@/styles/global.css";
import "swiper/css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { trpc } from "@/libs/trpc";

// For pages with nested layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default trpc.withTRPC(App);
