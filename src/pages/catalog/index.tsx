/* eslint-disable @next/next/no-img-element */
import Products from "@/components/blocks/catalog/products/Products";
import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Form from "@/components/share/Form";
import { GetServerSideProps } from "next";

interface Props {
  name: string;
}

function Index({ name }: Props) {
  return (
    <Container>
      <Banner />
      <div className="w-full bg-[#F5F5F5] pl-5 py-3 mt-16">
        <span>Главная » Моторное масло</span>
      </div>
      <Products name={name} />
      <Form />
    </Container>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const name = query.name ? decodeURIComponent(query.name as string) : null;
  return { props: { name } };
};
