import React, { useState } from "react";
import { Form, Input, Typography, Button, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
const { Title } = Typography;
function ContactUs() {
  const { sendimg, imgURL } = useContext(carContext);
  let image = imgURL;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    sendimg(formData);
  };

  const [ContactsInfo, setContactsInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Function to handle input changes and update the state
  const handleInputChange = (field, value) => {
    setContactsInfo({
      ...ContactsInfo,
      [field]: value,
    });
  };
  const handleSubmit = async () => {
    console.log(ContactsInfo);
    if (
      !ContactsInfo.name ||
      !ContactsInfo.email ||
      !ContactsInfo.subject ||
      !ContactsInfo.message
    ) {
      return message.error("Please fill complete Form!");
    }

    try {
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/bookings/addcontacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "auth-token":localStorage.getItem("jwtoken"),
          },
          body: JSON.stringify({ ContactsInfo }),
        }
      );
      let json = await response.json();
      console.log("from customerinfo");
      console.log(json);
      message.success("Thanks for Review!");
    } catch (error) {
      console.log("error in frontend contactus path", error);
    }
  };

  return (
    <>
      <div className="contactus_form">
        <div className="custom-form">
          <Title level={2} style={{ color: "white" }}>
            Contacts Us
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
          <Form.Item name="subject">
            <label htmlFor="subject" className="label-booking">
              Subject:
            </label>
            <Input
              placeholder="Enter subject"
              onChange={(e) => handleInputChange("subject", e.target.value)}
            />
          </Form.Item>
          <Form.Item name="message">
            <label htmlFor="message" className="label-booking">
              Message:
            </label>
            <Input
              placeholder="Enter message"
              onChange={(e) => handleInputChange("message", e.target.value)}
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

        {/* uncomment only below two lines and also from index.js backend file to implement multer functionality */}
        {/*       
        <input type="file" name="file" accept="image/*" onChange={handleFileChange} />
        <img height="100px" width="100px" src={imgURL} alt="here" /> */}
      </div>
    </>
  );
}

export default ContactUs;
