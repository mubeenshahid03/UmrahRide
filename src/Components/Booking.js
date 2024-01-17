import React from "react";
import { DatePicker, Form, Input, Select, Steps, Radio, Row, Col } from "antd";
import {
  CalendarFilled,
  CarFilled,
  EnvironmentFilled,
  ProfileFilled,
  RightCircleFilled,
  ScheduleFilled,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

function Booking() {
  return (
    <>
    
      <div className="header">
        <h3 className="header-h6 mt-5">Welcome! Book you umrah ride</h3>
        <h6 className="header-h6 mb-5">Book now bets cab service</h6>
      </div>

      <div>
        <table style={{ width: "50%", height: "auto", margin: "auto" }}>
          <tr>
            <td>
              <div className="step-icon">
                {" "}
                <EnvironmentFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
            <td style={{ width: "30%", color: "white" }}>
              <hr />
            </td>
            <td>
              <div className="step-icon">
                <CarFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
            <td style={{ width: "30%", color: "white" }}>
              <hr  />
            </td>
            <td>
              <div className="step-icon">
                <ProfileFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
            <td style={{ width: "30%", height: "2px", color: "white" }}>
              <hr />
            </td>
            <td>
              <div className="step-icon">
                <ScheduleFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div className="main_form">
        <Form className="custom-form">
          <Row gutter={16}>
            <Col span={12}>
          <Form.Item style={{ color: "white" }} name="destination">
            <label htmlFor="destination" ClassName="label-booking">
              Destination
            </label>
            <Select className="destination_select" placeholder='Select destination' options={[{ value: "male" }, { value: "female" }]} />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="hotel_name">
            <label htmlFor="hotel_name" className="label-booking">
              Hotel Name:
            </label>
            <Input className="hotel_input" placeholder="Enter hotel name  "/>
          </Form.Item>
          </Col>
          </Row>
          <Row gutter={16}>
          <Col span={12}>
          <Form.Item name="datepicker">
            <label htmlFor="datepicker" className="label-booking">
              DatePicker:
            </label>
            <DatePicker
              className="mx-2"
              suffixIcon={<CalendarFilled style={{ color: "black" }} />}
            />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="pickup">
            <label htmlFor="pickupfrom" className="label-booking">
              Pickup From
            </label>
            <Radio.Group className="mx-2">
              <Radio style={{ color: "white" }} value={1}>
                Airport
              </Radio>
              <Radio style={{ color: "white" }} value={2}>
                Hotel
              </Radio>
            </Radio.Group>
          </Form.Item>
          </Col>
          </Row>
          <Row>
            <Col span={24}>
          <Form.Item name="comments">
            <label htmlFor="email" className="label-booking">
              Comments:
            </label>
            <TextArea placeholder="your comments" />
          </Form.Item>
          </Col>
          </Row>
        </Form>
      </div>
      <div className="form-icon">
        <RightCircleFilled />
      </div>
    </>
  );
}

export default Booking;
