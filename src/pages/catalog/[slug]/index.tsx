/* eslint-disable @next/next/no-img-element */
// import { useEffect } from "react";
import Products from "@/components/blocks/catalog/products/Products";
import { Container } from "@/components/Container";
import Banner from "@/components/share/banner/Banner";
import Form from "@/components/share/Form";
// import Link from "next/link";

function index() {
  return (
    <Container>
      <Banner />
      <div className="w-full bg-[#F5F5F5] pl-5 py-3 mt-16">
        <span>Главная » Моторное масло</span>
      </div>
      <Products />
      <Form />
    </Container>
  );
}

export default index;
