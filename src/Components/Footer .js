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
      <footer class="primary-footer ant-layout-footer">
        <div class="logo">
          <a href="/" class="nuxt-link-active">
            <img src={Logo} class="img" alt="Hollywood Sign on The Hill" />
          </a>
        </div>
        <div class="footer-menu-wrap ant-space ant-space-horizontal ant-space-align-center">
          <div class="ant-space-item">
            <ul class="footer-menu footer-primary-menu">
              <li>
                <a href="#" class>
                  ไอศกรีมของฉัน
                </a>
              </li>
              <li>
                <a href="#" class>
                  สิทธิพิเศษ
                </a>
              </li>
              <li>
                <a href="#" class>
                  รีวอร์ด
                </a>
              </li>
              <li>
                <a href="#" class>
                  คูปองของฉัน
                </a>
              </li>
              <li>
                <a href="#" class>
                  บัตรกำนัลเงินสด
                </a>
              </li>
              <li>
                <a href="#" class>
                  บัตรสเวนเซ่นส์การ์ด
                </a>
              </li>
              <li>
                <a href="#" class>
                  ข้อมูลของฉัน
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer class="secondary-footer ant-layout-footer">
        <div class="column-social ant-space ant-space-horizontal ant-space-align-center">
          <div class="ant-space-item">
            <ul class="socials">
              <li>
                <a href="#" class>
                  <MDBBtn  floating size="sm" tag="a" >
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
                  <MDBBtn id="md1"  floating color="dark" size="sm" tag="a">
                    <MDBIcon fab icon="apple" />
                  </MDBBtn>
                </a>
              </li>
            </ul>
          </div>
          <div class="column-menu ant-space ant-space-horizontal ant-space-align-center">
            <div class="ant-space-item">
              <ul class="footer-menu footer-secondary-menu">
                <li href="#" class>
                  <a href="#" >
                    คำถามที่พบบ่อย
                  </a>
                </li>
                <li href="#" class>
                  <a href="#" class>
                    ข้อกำหนดการใช้งาน
                  </a>
                </li>
                <li href="#" class>
                  <a href="#" class>
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
