import React from "react";
import * as S from "./styles";
import logo from "../../../../assets/images/Menu/logo.png";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Navigation from "./Navigation";
import iconBag from "../../../../assets/images/icon/iconBag.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [productCart, setProductCart] = useState(0);
  // function handleToTalProduct() {
  setProductCart(productCart + 1);
  console.log(productCart);

  return (
    <S.Menu>
      <S.MenuWrapper>
        {/* Menu Left  */}
        <S.LogoWrapper>
          {" "}
          <Link to={"/"}>
            <img src={logo} alt="logo" width="100%" />{" "}
          </Link>
        </S.LogoWrapper>
        <S.MenuContentWrapper>
          <S.Search_Account_CartWrapper>
            <S.SearchWrapper>
              <S.Search>
                <Input type="text" placeholder=" Tìm kiếm" />
                <S.IconSearchWraper>
                  <SearchOutlined
                    style={{ fontSize: "30px", color: "#EEEEEE" }}
                  />
                </S.IconSearchWraper>
              </S.Search>
            </S.SearchWrapper>
            {/* Menu Right  */}
            <S.Account_CartWrapper>
              <S.AccountWrapper> Đăng nhập | Đăng ký</S.AccountWrapper>
              {/* <button
                onClick={() => {
                  handleToTalProduct();
                }}
              >
                {" "}
                Thêm vào giỏ hàng
              </button> */}
              <S.CartWrapper>
                <S.IconHeart style={{ fontSize: "22px" }}>
                  <HeartOutlined style={{ color: "grey" }} />
                </S.IconHeart>
                <S.IconBag>
                  <img src={iconBag} alt="iconBag" style={{ width: "25px" }} />
                  <div className="totalProductCart">{productCart}</div>
                </S.IconBag>
              </S.CartWrapper>
            </S.Account_CartWrapper>
          </S.Search_Account_CartWrapper>
          {/* Navigation Section  */}
          <Navigation />
        </S.MenuContentWrapper>
      </S.MenuWrapper>
    </S.Menu>
  );
};

export default Menu;
