import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import { DivMainContainer } from "./styles";

function ApplicationLayout({ children }: any) {
  return (
    <DivMainContainer>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop smooth top={300} />
    </DivMainContainer>
  );
}

export default ApplicationLayout;
