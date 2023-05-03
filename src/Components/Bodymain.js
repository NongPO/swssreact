import React from "react";
import { Row,Col } from "antd";
import Banner from '../images/banner-image.svg'

function Bodymain() {
  return (
    <section className="site-body ant-layout">
      <section className="ant-layout">
        <main
          className="ant-layout-content"
          style={{ padding: "0px", margin: "0px" }}
        >
          <div className="page-wrapper">
            <div className="page-banner">
              <div className="banner-wrap">
                <div className="container">
                  <Row align='middle' wrap={true}
                    className="banner-row-wrap ant-row-flex ant-row-flex-middle"
                    style={{ marginLeft: "-15px", marginRight: "-15px" }}
                    
                  >
                    <Col md={20} lg={12}
                      className="column-content "
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <div className="banenr-content">
                        <h1 className="heading">
                          สมัครเป็นสมาชิก
                          <br />
                          สเวนเซ่นส์วันนี้
                          พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
                        </h1>{" "}
                        <div className="content">
                          <p>
                            พิเศษสุดๆ!&nbsp;สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน
                            ยิ่งได้ ยิ่งคุ้ม&nbsp;ใครๆ ก็สมัครได้
                            ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ&nbsp;รอไม่ได้แล้ว
                            สมัครเลย
                          </p>
                        </div>
                        <Row className="ant-row" tyle="flex">
                          <Col sm={24} md={12} lg={12} >
                            <div className="action to-delivery-wrapper">
                              <a
                                href="/en/delivery"
                                className="wrap image-btn-en"
                              ></a>
                            </div>
                          </Col>{" "}
                          <Col sm={24} md={12} lg={12} ></Col>
                        </Row>
                      </div>
                    </Col>{" "}

                    <Col  md={20} lg={12}
                      className="column-image "
                      style={{ paddingLeft: "15px", paddingRight: "15px" }}
                    >
                      <div className="banner-image">
                        <img src={Banner}></img>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="ribbon"></div>
            </div>
           

           
            <div
              className="page-bottom"
              style={{ backgroup: "url('/images/bg-page-bottom.jpg&quot')" }}
            >
              <div className="container">
                <div className="page-bottom-row-wrap ant-row-flex ant-row-flex-middle">
                  <div className="column-image ant-col ant-col-md-10 ant-col-md-offset-2">
                    <div className="app-screen">
                      <div className="download-list">
                        <div
                          className="ant-row"
                          style={{ marginLeft: -"12px", marginRight: -"12px" }}
                        >
                          <div
                            className="ant-col ant-col-12"
                            style={{
                              paddingLeft: "12px",
                              paddingRight: "12px",
                            }}
                          >
                            <div className="download-item">
                              <a
                                href="https://play.google.com/store/apps/details?id=com.swensens1112.swensens"
                                target="_blank"
                              ></a>
                            </div>
                          </div>{" "}
                          <div
                            className="ant-col ant-col-12"
                            style={{
                              paddingLeft: "12px",
                              paddingRight: "12px",
                            }}
                          >
                            <div className="download-item">
                              <a
                                href="https://apps.apple.com/th/app/swensens/id1553427962"
                                target="_blank"
                              ></a>

                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}

export default Bodymain;
