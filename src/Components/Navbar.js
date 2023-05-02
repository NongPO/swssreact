import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
  MDBRipple,
} from "mdb-react-ui-kit";
import Logo from "../images/logo1.png";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

const items = [
  {
    key: "1",
    label: "EN",
  },


];

export default function App() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBRipple rippleTag="a" className="col-10">
            <img
              src={Logo}
              className="img-fluid rounded"
              alt="example"
              width={170}
            />
          </MDBRipple>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBBtn
                  outline
                  rounded
                  className="mx-7 me-3 "
                  tabIndex="1"
                  color="danger"
                >
                  สมัครสมาชิก
                </MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn outline rounded className="mx-7  " color="danger">
                  เข้าสู่ระบบ
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Typography.Link className="col-2 " >
                <Space>
                 TH
                  <DownOutlined />
                </Space>
              </Typography.Link>
            </Dropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
