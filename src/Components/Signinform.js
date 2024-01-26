import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import firebase from "../firebase";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
function Signinform() {
  const { Number, setNumber, setupRecaptcha ,addUser } =
    useContext(carContext);
    const [flag, setflag] = useState(false)
     const [otp, setotp] = useState("")
     const [confirmationobj, setconfirmationobj] = useState("")

      const navigate=useNavigate()
     const handleOTPinput = (otp) => {
      setotp(otp)
    };
  const handleOtp=async()=>{
console.log(Number)
    if(Number===""|| Number===undefined){
      return message.error("Enter Proper Number")
    }
    try{
      const response=await setupRecaptcha();
      message.success("Otp send Successfully")
      console.log(response)
      setconfirmationobj(response)
      setflag(true)
    }
    catch(error){
      console.log(error,"error in handleotp()")
      
    } 
  }

  const verifyOtp=async(e)=>{
    console.log(otp)
    e.preventDefault();
    if(otp===""||otp===undefined){
      return message.error("Enter correct Otp")
    }
    try {
      await confirmationobj.confirm(otp);
      console.log("user login successfully")
      navigate('/home')
      addUser();
      message.success("User Verified Successfully! ")
    } catch (error) {
      console.log("error in otp confirmation")
      message.error("your otp does not match")
    }
  }

  return (
    <>
      <div className="login-container" style={{display: !flag ?"block":"none"}}>
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
          {/* <button id="login-btn" type="button" class="btn btn-success ">
            Login/Signup
          </button> */}
          <button
            id="OTP-btn"
            type="button"
            class="btn btn-success "
            //disabled={isDisplaygetOTP}
            // onClick={() => handleClick("recaptcha-container")}
            onClick={handleOtp}
          >
            getOTP
          </button>
        </div>
        <div id="recaptcha-container"></div>
           </div>


            {/* OTP component   */}

      <div className="otp-container"style={{display: flag ?"block":"none"}}>
        <h3 style={{ textAlign: "center", color: "white" }}>UmrahRide.co</h3>
        <p style={{ textAlign: "center", color: "white" }}>
          {" "}
          Enter otp send on {Number}{" "}
        </p>
        <div className="otp-number mt-5">
          <OTPInput
            inputStyle={{ height: "50px", width: "50px" }}
            onChange={handleOTPinput}
            value={otp}
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
            // onClick={displayOTP}
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

export default Signinform;
