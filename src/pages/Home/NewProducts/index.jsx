import React from "react";
import * as S from "./styles";
import MilemProduct from "../../../assets/images/newProducts/milemskiiantiaging.png";
import GlacierProduct from "../../../assets/images/newProducts/glaciers.png";
import Slider from "react-slick";
import { dataProductListBanner } from "../../../data";
function NewProduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <S.NewProductWrapper>
      <S.HeadTitle> Sản phẩm mới</S.HeadTitle>
      <S.NewProduct>
        <S.ProductListWrapper>
          <Slider {...settings}>
            {dataProductListBanner.map((items) => (
              <S.ProductWrapper>
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
      <S.ShowProduct>
        <S.ImgWrapper>
          <img src={MilemProduct} alt="MilemProductImg" />
        </S.ImgWrapper>
        <S.ImgWrapper>
          <img src={GlacierProduct} alt="GlacierProductImg" />
        </S.ImgWrapper>
      </S.ShowProduct>
    </S.NewProductWrapper>
  );
}

export default NewProduct;
