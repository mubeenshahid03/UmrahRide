import react, { useState } from "react";
import carContext from "./carContext";
import { message } from "antd";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";
const CarState = (props) => {
    const navigate=useNavigate()
  let iCars = [];

  let iPackages = [
    {
      id: "1",
      name: "Sedan",
      heading: "Package (1) With Ziarah",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuyHVv3eyblgwJChAZatK4GeTus2jYIFmZmh8yhDE3w&s",
      description:
        "Jeddah Airport To Makkah Makkah Hotel To Makkah Ziarah Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Makkah Hotel Makkah Hotel To Jeddah Airport",
      type: "car",
      bags: "2",
      seats: "4",
      doors: "4",
      price: "1500",
    },
    {
      id: "2",
      name: "Hyundia",
      heading: "Package(1)",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYyVhfMYLCWnw-kUxDc01YQQ_GY2PBHXabsjQokFjXQ&s",
      description:
        "Jeddah Airport To Makkah Hotel Makkah Hotel To Madinah Hotel Madinah Hotel To Makkah Hotel Makkah Hotel To Jeddah Airport",
      type: "suv",
      bags: "6",
      seats: "6",
      doors: "4",
      price: "1300",
    },
    {
      id: "3",
      name: "Gmc",
      heading: "Package(2) with Ziarah",
      img_url:
        "https://www.shutterstock.com/image-photo/novosibirsk-russia-april-25-2023-260nw-2313792979.jpg",
      description:
        "Jeddah Airport To Makkah Hotel Makkah Hotel To Makkah Ziarah Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Madinah Airport",
      type: "suv",
      bags: "4",
      seats: "7",
      doors: "4",
      price: "1200",
    },
    {
      id: "4",
      name: "Toyota",
      heading: "Package(2) with Ziarah",
      img_url:
        "https://thumbs.dreamstime.com/b/toyota-hiace-white-minivan-toyota-hiace-white-minivan-motion-blurred-background-159162355.jpg",
      description:
        "Jeddah Airport To Makkah Hotel Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Airport",
      type: "minibus",
      bags: "6",
      seats: "10",
      doors: "4",
      price: "1000",
    },
    {
      id: "5",
      name: "Hyundia",
      heading: "Package(3) with Ziarah",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6B6g25gAgzLFpm6xVE-RzFXt9GDcYfPaTo09EZCtdQ&s",
      description:
        "Jeddah Airport To Makkah Hotel Makkah Hotel To Makkah Ziarah Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Jeddah Airport",
      type: "suv",
      bags: "5",
      seats: "7",
      doors: "4",
      price: "1450",
    },
    {
      id: "6",
      name: "Bus",
      heading: "Package(3)",
      img_url:
        "https://cdn.britannica.com/72/146072-050-124A752E/Greyhound-bus.jpg",
      description:
        "Jeddah Airport To Makkah Hotel Makkah Hotel To Madinah Hotel Madinah Hotel To Jeddah Airport",
      type: "bus",
      bags: "12",
      seats: "49",
      doors: "2",
      price: "1350",
    },

    {
      id: "7",
      name: "Toyota",
      heading: "Package(4) with Ziarah",
      img_url:
        "https://www.shutterstock.com/image-photo/karawang-west-java-indonesia-may-260nw-2324862499.jpg",
      description:
        "Madinah Airport To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Makkah Hotel Makkah Hotel To Makkah Ziarah Makkah Hotel To Jeddah Airport",
      type: "minibus",
      bags: "8",
      seats: "24",
      doors: "2",
      price: "1200",
    },

    {
      id: "8",
      name: "Honda",
      heading: "Package(4)",
      img_url:
        "https://www.shutterstock.com/image-photo/karawang-west-java-indonesia-may-260nw-2324862499.jpg",
      description:
        "Madinah Airport To Hotel Madinah Hotel To Makkah Hotel Makkah Hotel To Jeddah Airport",
      type: "suv",
      bags: "4",
      seats: "7",
      doors: "4",
      price: "800",
    },
  ];
  const [cars, setcars] = useState(iCars);
  const [packages, setpackages] = useState(iPackages);
  const userid = "123";
  const [imgURL, setimgURL] = useState(null);
  let host = "http://localhost:8000/";

  //state that store the  number of user with country code in login
  const [Number, setNumber] = useState(null);
  //below state disabled the getOTP button when user click on it
  const [isDisplaygetOTP, setisDisplaygetOTP] = useState(false);
  const [user, setuser] = useState(null);
  const [otpCode, setotpCode] = useState(null);

  // function that call on when user press get otp button in login page
  //   const handleClick = (recaptchaContainerId) => {
  //     console.log(Number);
  //     if (Number == null) {
  //       return message.error("Number Not Entered!");
  //     }
  //     setisDisplaygetOTP(true);
  //     let recaptcha = new firebase.auth.RecaptchaVerifier(recaptchaContainerId);

  //     firebase
  //       .auth()
  //       .signInWithPhoneNumber(Number, recaptcha)
  //       .then(function (e) {
  //         let code = prompt("enter otp", "");
  //         if (code == null) {
  //           return message.error("code is not entered!");
  //         }
  //         e.confirm(code)
  //           .then(function (result) {
  //             console.log("Number Verified");
  //             console.log(result.user, "user");
  //             console.log(result.user.phoneNumber, "user");
  //             alert("congrats");
  //           })
  //           .catch(function (error) {
  //             console.log("enter correct otp");
  //             message.error("Enter Correct otp");
  //           });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         message.error("error in otp frontend");
  //       });
  //   };
  const addUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/users/adduser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: Number, booking: "Makkah package" })
        }
      );
      let json = await response.json();
      console.log(json);
      console.log("first")
      navigate('/home')
      
    } catch (error) {
      console.log("error in frontend fitervehicles" + error);
    }
  };
  const handleClick = async (recaptchaContainerId) => {
    try {
      if (Number == null) {
        return message.error("Number Not Entered!");
      }

      setisDisplaygetOTP(true);
      const recaptcha = new firebase.auth.RecaptchaVerifier(
        recaptchaContainerId
      );
      
      const confirmation = await firebase
      .auth()
      .signInWithPhoneNumber(Number, recaptcha);
      
      navigate('/otp')
      // Store the confirmation object in state for later use
      setuser(confirmation);
      message.success("Message Sent  successfully!")
      console.log("user object",confirmation)
    } catch (error) {
      console.log(error);
      message.error("Error in OTP frontend");
    }
  };
  const verifyOtp = async () => {
    console.log(otpCode);
    console.log(user, "empty");

    try {
      await user.confirm(otpCode);
      console.log("Congratulations, number verified!");
      //here api call to backend
      addUser();
      message.success("User Verified!")
    } catch (error) {
      console.log(error);
      message.error("Enter Correct OTP");
    }
  };

  // api request to fetch all vehicles
  const fetchallvehicles = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/vehicles/fetchallvehicles/${userid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let json = await response.json();
      console.log(json);
      setcars(json);
    } catch (error) {
      console.log("error in frontend fetchallvehicles" + error);
    }
  };

  //api request to filter vehicles with cartype
  const filtervehicles = async (cartype) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/vehicles/filtervehicles/${cartype}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let json = await response.json();
      console.log(json);
      setcars(json);
    } catch (error) {
      console.log("error in frontend fitervehicles" + error);
    }
  };

  //functionality for multer that send img path to server
  const sendimg = async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log(json.imagePath);
      const imagePath = json.imagePath;

      // it will return only img address like file-1705490407389.png we need http://localhost:8000/file-1705490407389.png that why we concatenate
      const completeImagePath = host + imagePath; // Concatenate with host
      console.log(completeImagePath);
      setimgURL(completeImagePath);
    } catch (error) {
      console.log("error in frontend sendimg");
    }
  };

  return (
    <carContext.Provider
      value={{
        cars,
        setcars,
        packages,
        setpackages,
        fetchallvehicles,
        sendimg,
        imgURL,
        filtervehicles,
        Number,
        setNumber,
        handleClick,
        isDisplaygetOTP,
        otpCode,
        setotpCode,
        verifyOtp,
      }}
    >
      {props.children}
    </carContext.Provider>
  );
};
export default CarState;
