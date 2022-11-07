import React from "react";
import * as S from "./styles";
import Slider from "react-slick";
import { dataProductListBanner } from "../../../data";
import { useNavigate } from "react-router";
function SellingProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();

  return (
    <S.NewProductWrapper>
      <S.HeadTitle>Sản phẩm bán chạy</S.HeadTitle>
      <S.NewProduct>
        <S.ProductListWrapper>
          <Slider {...settings}>
            {dataProductListBanner.map((items, index) => (
              <S.ProductWrapper key={index}>
                <S.SliderImgWrapper>
                  <img src={items.linkImg} alt={items.name} />
                </S.SliderImgWrapper>
                <p>
                  {items.name} - {items.introduce}
                </p>
                <p>{items.price}</p>
              </S.ProductWrapper>
            ))}
          </Slider>
        </S.ProductListWrapper>
      </S.NewProduct>
    </S.NewProductWrapper>
  );
}

export default SellingProducts;
