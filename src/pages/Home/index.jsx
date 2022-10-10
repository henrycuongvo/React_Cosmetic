import React from "react";
import Header from "../../layouts/Header";
import NewProduct from "./NewProducts";
import Brands from "./Brands";
import Footer from "../../layouts/Footer";
import Banner from "./BannerDynamic";
import * as S from "./styles";
function Home() {
  return (
    <S.HomeWrapper>
      <Header />
      <S.MainWrapper>
        <Banner />
        <NewProduct />
        <Brands />
      </S.MainWrapper>
      <Footer />
    </S.HomeWrapper>
  );
}

export default Home;
