import React, { useState } from "react";
import { DatePicker, Form, Input, Select, Radio, Row, Col, Button, message } from "antd";
import {
  ArrowRightOutlined,
  CalendarFilled,
  CarFilled,
  EnvironmentFilled,
  ProfileFilled,
  RightCircleFilled,
  ScheduleFilled,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
import { useNavigate } from "react-router-dom";
function Booking() {
  const navigate=useNavigate()

  const{bookingInfo,setbookingInfo,addbooking}=useContext(carContext)
  
  
  const onFinish = (formvalues) => {
    console.log("bookingokookookok")
    console.log("values", formvalues);
    console.log(formvalues.datepicker.$d);
    setbookingInfo(formvalues);
    if(!localStorage.getItem("jwtoken")){
      navigate("/login")
      return message.info("Please Login!")
    }
    else{
      addbooking()
      navigate("/selectpackage")
  }
    
    
  };
  const handlebooking=()=>{
    
  }

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
              <hr />
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
        <Form className="custom-form" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                style={{ color: "white" }}
                name="destination"
                label={<span style={{ color: "white" }}>Destination:</span>}
                rules={[{ required: true, message: "Select destination" }]}
              >
                <Select
                  className="destination_select"
                  placeholder="Select destination"
                  options={[{ value: "Makkah to Madinah" }, { value: "Madinah to Makkah" }]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="hotel_name"
                label={<span style={{ color: "white" }}>Hotel Name:</span>}
                rules={[{ required: true, message: "Enter hotel name" }]}
              >
                <Input
                  className="hotel_input"
                  placeholder="Enter hotel name "
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="datepicker"
                style={{ width: "90%", marginLeft: "35px" }}
                label={<span style={{ color: "white" }}>Date:</span>}
                rules={[{ required: true, message: "Select date" }]}
              >
                <DatePicker
                  className="mx-2"
                  suffixIcon={<CalendarFilled style={{ color: "black" }} />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="pickup"
                label={<span style={{ color: "white" }}>Pickup From:</span>}
                rules={[{ required: true, message: "Select pickup from" }]}
              >
                <Radio.Group className="mx-2">
                  <Radio style={{ color: "white" }} value={"airport"}>
                    Airport
                  </Radio>
                  <Radio style={{ color: "white" }} value={"Hotel"}>
                    Hotel
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="comments"
                label={<span style={{ color: "white" }}>Comments:</span>}
                rules={[{ required: true, message: "Enter Comments" }]}
              >
                <TextArea placeholder="your comments" />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{display:"flex",justifyContent:"end"}}>
            <Form.Item >
              <Button
              onClick={handlebooking}
                htmlType="submit"
                shape="circle"
                icon={<ArrowRightOutlined />}
                size="large"
                style={{border:"none"}}

              />
            </Form.Item>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Booking;
