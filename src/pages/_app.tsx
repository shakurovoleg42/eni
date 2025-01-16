import type { AppProps } from "next/app";
import "../../public/fonts/gilroy-bold-webfont/style.css";
import "./globals.css";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
