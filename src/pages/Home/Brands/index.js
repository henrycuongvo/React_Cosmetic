import React from "react";
import "./index.css";
import DiorBrand from "../../../assets/images/brands/dior.png";
const Brands = () => {
  return (
    <>
      <div className="ImgWrapper">
        <img className="DiorImg" src={DiorBrand} alt=" DiorImg" />
      </div>
    </>
  );
};

export default Brands;
