import { FC, PropsWithChildren } from "react";

import Header from "@/components/share/header/Header";
import Footer from '@/components/share/footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;