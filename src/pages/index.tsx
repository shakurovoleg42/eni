import Banner from "@/components/share/banner/Banner";
import Head from "next/head";
// import useProductStore from "../store/useProductStore";
// import { useEffect } from "react";

export default function HomePage() {
  // const  products  = useProductStore(state => state.products);

  // useEffect(() => {
  //   useProductStore.getState().fetchProducts();
  // }, []);

  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta
          name="description"
          content="Добро пожаловать на главную страницу."
        />
      </Head>
      <>
        <Banner />
      </>
    </>
  );
}
