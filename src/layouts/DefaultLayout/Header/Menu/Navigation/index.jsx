import React from "react";
import * as S from "./styles";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <S.NavigationWrapper>
      <S.ContentWrapper>
        <S.PageChildren>
          {" "}
          <Link to={"/products"}>Sản phẩm</Link>
          <DownOutlined style={{ fontSize: "10px", padding: "0px 4px" }} />{" "}
        </S.PageChildren>
        <S.PageChildren> Hàng mới về </S.PageChildren>
        <S.PageChildren>
          {" "}
          Thương Hiệu{" "}
          <DownOutlined style={{ fontSize: "10px", padding: "0px 4px" }} />
        </S.PageChildren>
        <S.PageChildren>1994 Cosmetic</S.PageChildren>
        <S.PageChildren> Cửa hàng</S.PageChildren>
        <S.PageChildren> The Spa</S.PageChildren>
      </S.ContentWrapper>
    </S.NavigationWrapper>
  );
};

export default Navigation;
