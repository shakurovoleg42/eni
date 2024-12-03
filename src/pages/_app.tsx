import type { AppProps } from "next/app";
// import localFont from "next/font/local";
import '../../public/fonts/gilroy-bold-webfont/style.css'; // Путь к вашему CSS файлу с @font-face
import "./globals.css";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
