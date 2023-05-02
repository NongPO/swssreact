import React from "react";
import { useState } from "react";
import Check from "./Check";
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

function Body() {
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
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
  };

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
              <Form></Form>
              <Form.Item label="เพศ (ไม่ระบุได้)" name="requiredMarkValue">
                <Radio.Group>
                  <Radio.Button value="optional">ชาย</Radio.Button>
                  <Radio.Button value>หญิง</Radio.Button>
                  <Radio.Button value={false}>อื่นๆ</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form
                name="time_related_controls"
                {...formItemLayout}
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                }}
              ></Form>

              <Form.Item name="date-picker" label="DatePicker" {...config}>
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="date-time-picker"
                label="DatePicker[showTime]"
                {...config}
              >
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
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
                      <Button style={{fontSize:'16px'}} type="primary" danger shape="round" block>
                       สมัครสมาชิก
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
