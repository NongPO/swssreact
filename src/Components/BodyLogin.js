import React from "react";

import { useState } from "react";
import Check from "./Check";
import { Button, Form, Input, Space, Col, Row } from "antd";
import CardHeaderImage from "../images/card-head.png";
import { InfoCircleOutlined } from "@ant-design/icons";

function Body() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div className="body" style={{ padding: "40px 0px" }}>
      <div className="box-container">
        <div className="box-login">
          <div
            className="box-header"
            style={{ backgroundImage: `url(${CardHeaderImage})` }}
          >
            <h2>ยินดีต้อนรับ</h2>
            <p>เข้าสู่ระบบเพื่อใช้งาน</p>
          </div>
          <div className="box-body">
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                requiredMarkValue: requiredMark,
              }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
            >
              <Form.Item
                label="อีเมลล์"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="กรอกอีเมลล์" />
              </Form.Item>
              <Form.Item
              
                label="กรอกรหัสผ่าน"
                tooltip={{
                  title: "Tooltip with customize icon",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input placeholder="กรอกรหัสผ่าน" />
              </Form.Item>
              <Form.Item>
                <Row>
                  <Col style={{ width: '100%' }}>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Button type="primary" shape="round" block disabled  >
                      Primary
                    </Button>
                    </Space>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </div>

          {/*        <MDBRow center>
          <MDBCol >   
                <MDBRow>
                  <MDBCol md="10">
                    <label>อีเมล</label>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="กรอกอีเมล"
                      size="lg"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                    <br/>
                  <MDBCol md="10 " id="col2" >
                    <label>รหัสผ่าน</label>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="กรอกรหัสผ่าน"
                      size="lg"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol md="10 " id="col2" >
                  <Button type="primary" danger ghost shape="round"  id="but1" >
            เข้าสู่ระบบ
            </Button>
                  </MDBCol>
                </MDBRow>
          </MDBCol>
        </MDBRow> */}
        </div>
      </div>
    </div>
  );
}

export default Body;
