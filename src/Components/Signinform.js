import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { message } from "antd";
import firebase from "../firebase";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
function Signinform() {
  const { Number, setNumber, handleClick, isDisplaygetOTP } =
    useContext(carContext);

  return (
    <>
      <div className="login-container">
        <div className="login-header" style={{ color: "white" }}>
          <h3 className="logo-otp">UmrahRide.co</h3>
          <p style={{ color: "white" }}>
            <Link style={{ color: "white" }} to="/login">
              Login
            </Link>
            /
            <Link style={{ color: "white" }} to="/*">
              Register
            </Link>
          </p>
        </div>
        <br />
        <label
          style={{ color: "white", display: "block" }}
          htmlFor="hotel_name"
          className="label-booking"
        >
          Phone Number:
        </label>

        <div className="login-phone">
          <span
            style={{
              height: "50px",
              width: "350px",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="PK"
              value={Number}
              onChange={setNumber}
            />
          </span>
        </div>
        <div id="login-btn-div">
          <button id="login-btn" type="button" class="btn btn-success ">
            Login/Signup
          </button>
          <button
            id="OTP-btn"
            type="button"
            class="btn btn-success "
            disabled={isDisplaygetOTP}
            onClick={() => handleClick("recaptcha-container")}
          >
            getOTP
          </button>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </>
  );
}

export default Signinform;
