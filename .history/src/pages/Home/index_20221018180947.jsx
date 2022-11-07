import React from "react";
import Header from "../../layouts/Header";
import NewProduct from "./NewProducts";
import Brands from "./Brands";
import Footer from "../../layouts/Footer";
import Banner from "./BannerDynamic";
import SellingProducts from "./SellingProducts";
import SuggestedProducts from "./SuggestedProducts";
import * as S from "./styles";
function Home() {
  return (
    <S.HomeWrapper>
      <Header />
      <S.MainWrapper>
        <Banner />
        <NewProduct />
        <SellingProducts />
        <SuggestedProducts />
        <Brands />
      </S.MainWrapper>
      <Footer />
    </S.HomeWrapper>
  );
}

export default Home;
