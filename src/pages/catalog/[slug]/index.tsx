/* eslint-disable @next/next/no-img-element */
import Products from "@/components/blocks/catalog/products/Products";
import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Form from "@/components/share/Form";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface Props {
  name: string;
}

function Index({ name }: Props) {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} key="desc" />
      </Head>
      <Container>
        <Banner />
        <div className="w-full bg-[#F5F5F5] pl-5 py-3 mt-16">
          <span>Главная » {name}</span>
        </div>
        <Products name={name} />
        <Form />
      </Container>
    </>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug as string;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/categories`);
  const data = await res.json();

  interface Category {
    slug: string;
    name: string;
  }

  const category = (data.data.list as Category[]).find(
    (cat) => cat.slug === slug
  );

  return {
    props: {
      name: category ? category.name : "Неизвестная категория",
    },
  };
};
