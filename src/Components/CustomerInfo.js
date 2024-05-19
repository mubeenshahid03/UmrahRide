import React, { useState } from "react";
import { Form, Input, Typography, Button, message } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function CustomerInfo() {
  const navigate = useNavigate();
  // State object to store customer information
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  // Function to handle input changes and update the state
  const handleInputChange = (field, value) => {
    setCustomerInfo({
      ...customerInfo,
      [field]: value,
    });
  };
  const handleSubmit = async () => {
    console.log(customerInfo);
    if (!customerInfo.name || !customerInfo.email || !customerInfo.whatsapp) {
      return message.error("Please fill complete Form!");
    }
    console.log("customr info", customerInfo);
    if (!localStorage.getItem("jwtoken")) {
      navigate("/login");
      return message.info("Please login!");
    } else {
      try {
        const response = await fetch(
          "http://localhost:8000/api/users/customerinfo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("jwtoken"),
            },
            body: JSON.stringify({ customerInfo }),
          }
        );
        let json = await response.json();
        console.log("from customerinfo");
        console.log(json);
        message.success("Saved  successfully!");
        navigate("/home");
      } catch (error) {
        console.log("error in frontend customerinfo path", error);
      }
    }
  };

  return (
    <>
      <div className="contactus_form">
        <div className="custom-form">
          <Title level={2} style={{ color: "white" }}>
            Customer Info
          </Title>
          <Form.Item name="name">
            <label htmlFor="name" className="label-booking">
              Name:
            </label>
            <Input
              placeholder="Enter your name"
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </Form.Item>
          <Form.Item name="email">
            <label htmlFor="email" className="label-booking">
              Email:
            </label>
            <Input
              placeholder="Enter your email"
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </Form.Item>
          <Form.Item name="whatsapp">
            <label htmlFor="whatsapp" className="label-booking">
              Whatsapp:
            </label>
            <Input
              placeholder="Enter whatsapp number"
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
            />
          </Form.Item>

          <Button
            style={{ width: "100%" }}
            type="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default CustomerInfo;
