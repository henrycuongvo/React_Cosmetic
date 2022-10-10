import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import logo from "../../assets/images/Menu/logo.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
function Footer() {
  return (
    <div className="wrapper">
      <div className="info">
        <div className="container">
          <div className="content">
            <div className="row">
              <Row guiter={[32, 32]}>
                <Col className="col" span={6}>
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="address">
                    95 QL14, xã Hoà Thuận, Thành phố Buôn Ma Thuộc, tỉnh Đắk Lắk
                  </div>{" "}
                  <br />
                  <div className="row_info">
                    <span> Email: abc@gmail.com </span> <br />
                    <span> Hotline: 0888.222.247</span>
                    <br />
                    <span> Giờ làm việc</span>
                    <br />
                    <span> Thứ 2 - Thứ 7: 09:00 - 20:30</span>
                    <br />
                    <span>Chủ Nhật: 12:30 - 17:00</span>
                    <br />
                    <div className="link_wrapper">
                      <div className="link">
                        <span>
                          <FacebookOutlined />
                        </span>
                        <span>
                          <InstagramOutlined />
                        </span>
                        <span>
                          <MailOutlined />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="col" span={6}>
                  <div className="menu">
                    <br />
                    <div className="title"> Menu</div>
                    <br />
                    <ul className="menu_content">
                      <li> Sản phẩm</li>
                      <li> Hàng mới về</li>
                      <li> Thương hiệu</li>
                      <li> 1994 Cosmetic</li>
                      <li> Cửa hàng</li>
                      <li> The Spa</li>
                    </ul>
                  </div>
                </Col>
                <Col className="col" span={6}>
                  <br />
                  <br />
                  <div className="title"> Thông tin và hướng dẫn</div>
                  <ul>
                    <li> Hình thức thanh toán</li>
                    <li> Chính sách bảo mật</li>
                    <li> Điều khoản sử dụng</li>
                  </ul>
                </Col>
                <Col className="col" span={6}>
                  col-6
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="copyright_content">
          <div style={{ textAlign: "center !important" }}>
            Copyright 2022 © by 1994 Cosmetic | Your Skincare Friend. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
