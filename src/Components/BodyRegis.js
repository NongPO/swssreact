import React from "react";
import { useState } from "react";
import Check from "./Check";
import { Link, useHistory, useLocation } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  authRegister,
} from "../features/slices/AuthSlice";
import {
  Button,
  Form,
  Input,
  Space,
  Col,
  Row,
  Radio,
  DatePicker,
  TimePicker,
  Checkbox,
} from "antd";
import CardHeaderImage from "../images/card-head.png";
import { InfoCircleOutlined } from "@ant-design/icons";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";

function Body() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const App = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const { RangePicker } = DatePicker;
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const onFinish = async (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      birthdate: fieldsValue["birthdate"].format("YYYY-MM-DD"),

    };
    console.log("Received values of form: ", values);
    try
    {
      const resultAction = await dispatch(authRegister({ data: values }));
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

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className="site-body ant-layout" style={{ padding: "40px 0px" }}>
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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              method="post"
            >
              <Form.Item
                label="ชื่อ"
                required
                tooltip="This is a required field"
                name="firstname"
                rules={[
                  {
                    required: true,
                    
                    message: "The input is not valid firstname!",
                  },
                ]}
              >
                <Input placeholder="กรอกชื่อจริง" />
              </Form.Item>

              <Form.Item
                label="นามสกุล"
                required
                tooltip="This is a required field"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "The input is not valid lastname!",
                  },
                ]}
              >
                <Input placeholder="กรอกนามสกุล" />
              </Form.Item>

              

              <Form.Item
                label="เบอร์โทรศัพท์"
                required
                tooltip="This is a required field"
                name="Contract"
                rules={[
                  {
                    required: true,
                    message: "The input is not valid email",
                  },
                ]}
              >
                <Input placeholder="กรอกอีเมลล์" />
              </Form.Item>


              <Form.Item
                label="อีเมลล์"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
                tooltip="This is a required field"
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
                  title: "Tooltip with customize icon",
                  icon: <InfoCircleOutlined />,
                }}
              >
                <Input.Password placeholder="กรอกรหัสผ่าน" />
              </Form.Item>
             
              <Form.Item label="เพศ (ไม่ระบุได้)" name="requiredMarkValue">
                <Radio.Group>
                  <Radio.Button value="ชาย">ชาย</Radio.Button>
                  <Radio.Button value="หญิง">หญิง</Radio.Button>
                  <Radio.Button value="อื่นๆ">อื่นๆ</Radio.Button>
                </Radio.Group>
              </Form.Item>
              

              <Form.Item name="birthdate" label="วัน-เดือน-ปีเกิด" {...config}>
                <DatePicker />
              </Form.Item>
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="
ฉันได้อ่านและยอมรับ ข้อกำหนดการใช้งาน และ นโยบายความเป็นส่วนตัว ของสเวนเซ่นส์"
              />
              <MDBCheckbox
              
                name="flexCheck"
                value=""
                id="flexCheckChecked"
                label="ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และบริษัทในเครือ โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง นโยบายความเป็นส่วนตัว เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ"
                defaultChecked
              />

              <Form.Item>
                <Row>
                  <Col style={{ width: "100%" }}>
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <Button style={{fontSize:'16px'}} type="primary" danger shape="round" block  htmlType="submit">
                       สมัครสมาชิก
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
  );
}

export default Body;
