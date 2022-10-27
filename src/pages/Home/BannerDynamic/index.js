import React from "react";
import * as S from "./styles";
import Slider from "react-slick";
import banner1 from "../../../assets/images/banners/banner_1.png";
import banner2 from "../../../assets/images/banners/banner_2.png";
import banner3 from "../../../assets/images/banners/banner_3.png";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <S.bannerWrapper>
      <div style={{ maxWidth: "85%", margin: "auto", maxHeight: "400px" }}>
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="banner1" />
          </div>
          <div>
            <img src={banner2} alt="banner2" />
          </div>
          <div>
            <img src={banner3} alt="banner3" />
          </div>
        </Slider>
      </div>
    </S.bannerWrapper>
  );
}
export default Banner;
