import AuthMiddleware from "@/common/layouts/templates/AuthMiddleware";
import { trpc } from "@/libs/trpc";
import "@/styles/global.css";
import { Provider, createStore } from "jotai";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "swiper/css";

// For pages with nested layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const store = createStore();

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return (
    <Provider store={store}>
      {/* @ts-ignore */}
      <AuthMiddleware>{getLayout(<Component {...pageProps} />)}</AuthMiddleware>
      <Toaster />
    </Provider>
  );
}

export default trpc.withTRPC(App);
