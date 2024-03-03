import { Button, Col, Row, message } from "antd";
import React from "react";
import { useContext, useState, useEffect } from "react";
import carContext from "../context/cars/carContext";
function Bookingsummary() {
  const { bookingSummary, setbookingSummary } = useContext(carContext);

  useEffect(() => {
    const storedBookingSummary = localStorage.getItem("bookingsummary");
    if (storedBookingSummary) {
      setbookingSummary(JSON.parse(storedBookingSummary));
    }
    //console.log(bookingSummary)
  }, []);

  return (
    <>
      <Row style={{ marginTop: "70px" }}>
        <Col
          span={14}
          lg={14}
          xl={13}
          md={16}
          sm={20}
          xs={22}
          style={{
            backgroundColor: "white",
            height: "auto",
            margin: "auto",
            padding: "20px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBlock: "15px" }}>
            Booking Summary
          </h2>
          <Row>
            <Col
              span={16}
              lg={16}
              sm={24}
              xs={24}
              style={{
                height: "270px",
                backgroundColor: "lightgray",
                margin: "auto",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                width="100%"
                height="270px"
                src={
                  bookingSummary.vehicle
                    ? bookingSummary.vehicle.imgURL
                    : "img not found"
                }
              />
            </Col>
          </Row>
          <Row style={{ display: "flex", flexDirection: "row" }}>
            <div id="booking-summary-content-left">
              <div>
                <h3>Car name </h3>
                <h6>{bookingSummary.vehicle.name}</h6>
              </div>
              <div></div>
              <h4>Car Details</h4>
              <h6>Type : {bookingSummary.vehicle.cartype}</h6>
              <h6>Seates :{bookingSummary.vehicle.seats}</h6>
              <h6>Bags : {bookingSummary.vehicle.bags}</h6>
            </div>
            <div id="booking-summary-content-right">
              <p id="booking-summary-price">
                {" "}
                <span style={{ fontWeight: "bolder" }}>1500</span> SAR
              </p>
            </div>
            <Button
              id="book-summary-btn"
              type="primary"
              onClick={() => {
                message.success("Your order has been placed successfully!");
              }}
            >
              Button
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Bookingsummary;
