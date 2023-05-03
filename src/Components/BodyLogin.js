import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  userAuthLogin,
} from "../features/slices/AuthSlice";

import { useState,useEffect } from "react";
import { Button, Form, Input, Space, Col, Row } from "antd";
import CardHeaderImage from "../images/card-head.png";
import { InfoCircleOutlined } from "@ant-design/icons";

function Body() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("กรอกรหัสผ่าน");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const [emailName, setEmailName] = useState("");
  const [password, setPassword] = useState("");
 

  const onFinish = async (values) => {
    console.log("Success:", values);
    try
    {
      const resultAction = await dispatch(userAuthLogin({ data: values }));
      unwrapResult(resultAction);
      if (resultAction.payload.error) {
        console.log(resultAction.payload.error_description);
      }else{

        history.push("/"); //goto home
      }

    }catch (err) {
      console.error("Failed to save the post: ", err);
    } finally {
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateEmptyField = (strValue) => {
    if (!strValue) {
      // strValue was empty string, false, 0, null, undefined, ...
      return true;
    }
    if (strValue === "") {
      // strValue was empty string
      return true;
    }

    return false;
  };

 
 

  return (
    <section className="site-body ant-layout" style={{ padding: "40px 0px" }}>
      <section className="ant-layout">
        <main
          className="ant-layout-content"
          style={{ padding: "0px", margin: "0px" }}
        >
          <div className="container">
            <div className="ant-spin-nested-loading">
              <div className="ant-spin-container">
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
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      method="post"
                    >
                      <Form.Item
                        label="อีเมลล์"
                        name="username"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                        ]}
                        tooltip="This is a required field"
                        value={emailName}
                        onChange={(e) => setEmailName(e.target.value)}
                      >
                        <Input placeholder="กรอกอีเมลล์" />
                      </Form.Item>
                      <Form.Item
                        label="กรอกรหัสผ่าน"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                          {
                            min: 8,
                            message: "Password must be minimum 8 characters.",
                          },
                        ]}
                        tooltip={{
                          title: "This is a required field",
                          icon: <InfoCircleOutlined />,
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      >
                        <Input.Password placeholder="กรอกรหัสผ่าน" />
                      </Form.Item>
                      <Form.Item>
                        <Row>
                          <Col style={{ width: "100%" }}>
                            <Space
                              direction="vertical"
                              style={{ width: "100%" }}
                            >
                              <Button
                                type="primary"
                                shape="round"
                                block
                                htmlType="submit"
                               
                              >
                                เข้าสู่ระบบเพื่อใช้งาน
                              </Button>
                            </Space>
                          </Col>
                        </Row>
                      </Form.Item>
                    </Form>
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

export default Body;
