import styled from "styled-components";
export const NewProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 20px auto;
  .slider__banner-newProduct {
    margin-bottom: 20px;
  }
`;

export const HeadTitle = styled.div`
  font-size: 26px;
  margin-bottom: 20px;
  text-align: center;
`;
export const NewProduct = styled.div`
  margin-bottom: 20px;
`;
export const ProductListWrapper = styled.div`
  :hover {
    .slick-prev,
    .slick-next {
      color: var(--swiper-theme-color);
      transition: opacity 0.3s ease;
      background-color: gray;
      height: 30px;
    }
  }
`;
export const ProductWrapper = styled.div`
  width: calc(1140px / 4);
  text-align: center;
`;
export const ShowProduct = styled.div`
  display: flex;
`;
export const SliderImgWrapper = styled.div`
  max-width: 25%;
  height: 250px;
  img {
    width: calc(1140px / 4);
    height: 100%;
    padding: 10px 10px 0px 10px;
  }
`;
export const ImgWrapper = styled.div`
  max-width: 50%;
  padding: 0px 15px;
  margin: 0 auto;

  img {
    max-width: 100%;
  }
`;
