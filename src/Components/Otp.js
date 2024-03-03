import { Input, Row } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
import firebase from "../firebase";
function Otp() {
  const { otpCode, setotpCode, verifyOtp, Number } = useContext(carContext);
  const [OTP, setOTP] = useState(null);
  const handleOTPinput = (otp) => {
    setOTP(otp);
    setotpCode(otp);
  };
  const displayOTP = () => {
    console.log(OTP);
  };

  return (
    <>
      <div className="otp-container">
        <h3 style={{ textAlign: "center", color: "white" }}>UmrahRide.co</h3>
        <p style={{ textAlign: "center", color: "white" }}>
          {" "}
          Enter otp send on {Number}{" "}
        </p>
        <div className="otp-number mt-5">
          <OTPInput
            inputStyle={{ height: "50px", width: "50px" }}
            onChange={handleOTPinput}
            value={OTP}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            isInputNum="true"
          />
        </div>
        <div className="otp-btn-div">
          <button
            id="otp-btn"
            type="button"
            onClick={displayOTP}
            class="btn btn-success  "
          >
            Back to Login
          </button>
          <button
            id="otp-btn"
            type="button"
            onClick={verifyOtp}
            class="btn btn-success  "
          >
            Verify Otp
          </button>
        </div>
      </div>
    </>
  );
}

export default Otp;
