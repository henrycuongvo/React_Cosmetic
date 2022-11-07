import React from "react";
import * as S from "./styles";
import DiorBrand from "../../../assets/images/brands/dior.png";
const Brands = () => {
  return (
    <>
      <S.ImgWrapper>
        <img className="DiorImg" src={DiorBrand} alt=" DiorImg" />
      </S.ImgWrapper>
    </>
  );
};

export default Brands;
