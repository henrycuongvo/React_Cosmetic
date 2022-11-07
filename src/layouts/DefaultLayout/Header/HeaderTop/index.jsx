import React from "react";
import * as S from "./styles";
import {
  EyeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
const HeaderTop = () => {
  return (
    <>
      <S.HeaderTop>
        {" "}
        <S.Link>
          <S.IconFaceBook>
            <FacebookOutlined />
          </S.IconFaceBook>
          <S.IconInstagram>
            <InstagramOutlined />
          </S.IconInstagram>
          <S.IconMail>
            <MailOutlined />
          </S.IconMail>
        </S.Link>
        <S.OrderTracking style={{ fontSize: "12px" }}>
          <EyeOutlined /> Theo dõi đơn hàng
        </S.OrderTracking>
      </S.HeaderTop>
    </>
  );
};
export default HeaderTop;
