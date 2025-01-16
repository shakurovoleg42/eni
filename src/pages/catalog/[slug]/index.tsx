/* eslint-disable @next/next/no-img-element */
// import { useEffect } from "react";
import Products from "@/components/blocks/catalog/products/Products";
import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Form from "@/components/share/Form";
// import Link from "next/link";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const name = router.query.name as string;
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
