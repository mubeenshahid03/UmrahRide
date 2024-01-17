import { Input, Row } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
function Otp() {
  const [OTP, setOTP] = useState(null);
  const handleOTPinput = (otp) => {
    setOTP(otp);
    
  };
  const displayOTP=()=>{
    console.log(OTP)
  }


  let _otp = "03006673885";
  return (
    <>
      <div className="otp-container">
        <h3 style={{ textAlign: "center", color: "white" }}>UmrahRide.co</h3>
        <p style={{ textAlign: "center", color: "white" }}>
          {" "}
          Enter otp send on {_otp}{" "}
        </p>
        <div className="otp-number mt-5">
            <OTPInput
              inputStyle={{height:"50px",width:"50px"}}
              onChange={handleOTPinput}
              value={OTP}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              isInputNum="true"
            />
        </div>
        <div className="otp-btn-div">
          <button id="otp-btn" type="button" onClick={displayOTP} class="btn btn-success  ">
            Back to Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Otp;
