import React from "react";
import "../index.css";
import { Image } from "antd";
import Logo from "../images/sws.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Col, Row } from "antd";
import { FacebookOutlined } from "@ant-design/icons";

export default function App() {
  return (
    <div id="footer">
      <footer className="primary-footer ant-layout-footer">
        <div className="logo">
          <a href="/" className="nuxt-link-active">
            <img src={Logo} className="img" alt="Hollywood Sign on The Hill" />
          </a>
        </div>
        <div className="footer-menu-wrap ant-space ant-space-horizontal ant-space-align-center">
          <div className="ant-space-item">
            <ul className="footer-menu footer-primary-menu">
              <li>
                <a href="#" className>
                  ไอศกรีมของฉัน
                </a>
              </li>
              <li>
                <a href="#" className>
                  สิทธิพิเศษ
                </a>
              </li>
              <li>
                <a href="#" className>
                  รีวอร์ด
                </a>
              </li>
              <li>
                <a href="#" className>
                  คูปองของฉัน
                </a>
              </li>
              <li>
                <a href="#" className>
                  บัตรกำนัลเงินสด
                </a>
              </li>
              <li>
                <a href="#" className>
                  บัตรสเวนเซ่นส์การ์ด
                </a>
              </li>
              <li>
                <a href="#" className>
                  ข้อมูลของฉัน
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="secondary-footer ant-layout-footer">
        <div className="column-social ant-space ant-space-horizontal ant-space-align-center">
          <div className="ant-space-item">
            <ul className="socials">
              <li>
                <a href="#" className>
                  <MDBBtn floating size="sm" tag="a">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                  <MDBBtn
                    id="md1"
                    floating
                    style={{ backgroundColor: "#ac2bac" }}
                    size="sm"
                    tag="a"
                  >
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>
                  <MDBBtn id="md1" floating color="dark" size="sm" tag="a">
                    <MDBIcon fab icon="apple" />
                  </MDBBtn>
                </a>
              </li>
            </ul>
          </div>
          <div className="column-menu ant-space ant-space-horizontal ant-space-align-center">
            <div className="ant-space-item">
              <ul className="footer-menu footer-secondary-menu">
                <li href="#" className>
                  <a href="#">คำถามที่พบบ่อย</a>
                </li>
                <li href="#" className>
                  <a href="#" className>
                    ข้อกำหนดการใช้งาน
                  </a>
                </li>
                <li href="#" className>
                  <a href="#" className>
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
