import React from "react";
import { Form, Input, Typography, Button } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
const { Title } = Typography;
function ContactUs() {
const{sendimg,imgURL}=useContext(carContext)
let image=imgURL
  const handleFileChange=(event)=>{
    const file = event.target.files[0];
    //  console.log(file)
    const formData = new FormData();
    formData.append('file', file);  
    sendimg(formData);
  }


  return (
    <>
      <div className="contactus_form">
        <Form className="custom-form">
          <Title level={2} style={{ color: "white" }}>
            Contact Us
          </Title>
          <Form.Item name="hotel_name">
            <label htmlFor="hotel_name" className="label-booking">
              Name:
            </label>
            <Input placeholder="Enter you name"/>
          </Form.Item>
          <Form.Item name="datepicker">
            <label htmlFor="datepicker" className="label-booking">
              Email:
            </label>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item name="pickup">
            <label htmlFor="pickupfrom" className="label-booking">
              Whatsapp:
            </label>
            <Input placeholder="Enter whatsapp number"/>
          </Form.Item>
          <Form.Item name="comments">
            <label htmlFor="email" className="label-booking">
              Message:
            </label>
            <TextArea placeholder="enter your message here" />
          </Form.Item>
          <Button style={{ width: "100%" }} type="primary">
            Submit
          </Button>
        </Form>
        <input type="file" name="file" accept="image/*" onChange={handleFileChange} />
        <img height="100px" width="100px" src={imgURL} alt="here" />
      </div>
    </>
  );
}

export default ContactUs;
