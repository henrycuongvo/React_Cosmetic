import React from "react";
import * as S from "./styles";
import { DownOutlined } from "@ant-design/icons";

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <S.ContentWrapper>
        <S.Product>
          {" "}
          Sản phẩm
          <DownOutlined style={{ fontSize: "10px", padding: "0px 4px" }} />{" "}
        </S.Product>
        <S.NewProduct> Hàng mới về </S.NewProduct>
        <S.BrandName>
          {" "}
          Thương Hiệu{" "}
          <DownOutlined style={{ fontSize: "10px", padding: "0px 4px" }} />
        </S.BrandName>
        <S.Cosmetic1994>1994 Cosmetic</S.Cosmetic1994>
        <S.Store> Cửa hàng</S.Store>
        <S.TheSpa> The Spa</S.TheSpa>
      </S.ContentWrapper>
    </S.NavigationWrapper>
  );
};

export default Navigation;
