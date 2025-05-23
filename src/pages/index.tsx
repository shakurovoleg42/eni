import About from "@/components/blocks/home/about";
import Catalog from "@/components/blocks/home/catalog";
import News from "@/components/blocks/home/news";
import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Form from "@/components/share/Form";
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
      <Container>
        <Banner />
        <About />
        <Catalog />
        <News />
        <Form />
      </Container>
    </>
  );
}
