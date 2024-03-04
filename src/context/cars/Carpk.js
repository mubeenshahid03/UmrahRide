import react, { useEffect, useState } from "react";
import carContext from "./carContext";
import { message } from "antd";
import firebase from "../../firebase";
import { useNavigate } from "react-router-dom";
const CarState = (props) => {
  const navigate = useNavigate();
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
  const [packages, setpackages] = useState([]);
  const userid = "123";
  const [imgURL, setimgURL] = useState(null);
  let host = "http://localhost:8000/";

  //state that store the  number of user with country code in login
  const [Number, setNumber] = useState(null);
  //below state disabled the getOTP button when user click on it
  const [isDisplaygetOTP, setisDisplaygetOTP] = useState(false);
  const [otpCode, setotpCode] = useState(null);
  const [isSpin, setisSpin] = useState(false);
  //for booking.js
  const [bookingInfo, setbookingInfo] = useState(null);

  // for selectpackage.js
  const [selectPackage, setselectPackage] = useState(null);
  //for model that open in packages
  const [isModelOpen, setisModelOpen] = useState(false);
  //for booking of package in packages
  const [choosedPackage, setchoosedPackage] = useState();
  //const [bookPackage, setbookPackage] = useState()
  const [pkgbooking, setpkgbooking] = useState({});

  const addUser = async () => {
    try {
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/users/adduser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: Number, booking: "Makkah package" }),
        }
      );
      let json = await response.json();
      console.log("from frontend ok ok o k");
      console.log(json);
      // console.log(json.authtoken)
      // console.log(json.registeredUser._id)
      // console.log(json.authtoken)
      const token = json.authtoken;
      if (token) {
        localStorage.setItem("jwtoken", json.authtoken);
      } else {
        message.error("token could not store");
      }

      navigate("/home");
    } catch (error) {
      console.log("error in frontend add user" + error);
    }
  };

  const setupRecaptcha = async () => {
    const recaptcha = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {}
    );
    recaptcha.render();
    return firebase.auth().signInWithPhoneNumber(Number, recaptcha);
  };

  // console.log("boookininfo from context")
  // console.log(bookingInfo)
  // console.log("pkg info from context")
  // console.log(selectPackage)

  // api request to fetch all vehicles
  const fetchallvehicles = async () => {
    try {
      const response = await fetch(
        `https://umrah-ride-backend-wr.vercel.app/api/vehicles/fetchallvehicles/${userid}`,
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
        `https://umrah-ride-backend-wr.vercel.app/api/vehicles/filtervehicles/${cartype}`,
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
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );
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

  //fetching destination from http://localhost:8000/api/destinations/fetchdestinations
  const [destinations, setdestinations] = useState([]);
  const fetchdestinations = async () => {
    try {
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/destinations/fetchdestinations",
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );
      let json = await response.json();
      console.log(json);
      console.log("above from fetchdestiantion");
      setdestinations(json);
    } catch (error) {
      console.log("error in frontend fetchdestinations" + error);
    }
  };

  const [selectedcars, setselectedcars] = useState([]);
  const [destinationId, setdestinationId] = useState("");

  const showspecificcar = async () => {
    const selectedDestination = bookingInfo.destination;
    // console.log(selectedDestination,"selecteddestination")
    const [from, to] = selectedDestination.split("-");
    console.log(from);
    console.log(to);
    let ok = destinations.filter((destination) => {
      return destination.from === from;
    });
    console.log(ok);
    let selectedDestinationId = ok[0]._id;
    setdestinationId(selectedDestinationId);
    console.log(selectedDestinationId);
    localStorage.setItem("destinationid", selectedDestinationId);
    fetchspecificcars();
    
    navigate("/selectpackage");
  };

  const fetchspecificcars = async () => {
    let destId = localStorage.getItem("destinationid");

    try {
      console.log(destId);
      const response = await fetch(
        `https://umrah-ride-backend-wr.vercel.app/api/pricings/${destId}`,
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );
      let json = await response.json();
      console.log(json);
      console.log("above from selected destination")
      setselectedcars(json);
    } catch (error) {
      console.log("error from frontend selected destination", error);
    }
  };

  // const addpkg=async()=>{
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8000/api/bookings/addbooking",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token":localStorage.getItem("jwtoken"),
  //         },
  //         body: JSON.stringify({selectPackage})
  //       }
  //     );
  //     let json = await response.json();
  //     console.log("from addpkg")
  //     console.log(json)

  //   } catch (error) {
  //     console.log("error in frontend add package frontend" + error);
  //   }

  // }
  const [bookingstatus, setbookingstatus] = useState("0");
  //api path to add booking obj inDB http://localhost:8000/api/users/addbooking
  const addbooking = async () => {
    // console.log(bookingInfo)
    // console.log(destinationId)
    console.log(selectPackage);
    // console.log(selectPackage._id)

    // Append new properties to the bookingInfo object
    bookingInfo.vehicleId = selectPackage._id;
    bookingInfo.destinationId = localStorage.getItem("destinationid");
    bookingInfo.price = selectPackage.price;
    bookingInfo.isPackage = false;
    bookingInfo.packageId = "null";
    bookingInfo.bookingstatus = bookingstatus;

    try {
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/bookings/addbooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("jwtoken"),
          },
          body: JSON.stringify({ bookingInfo }),
        }
      );
      let json = await response.json();
      // console.log("from addbooking")
      // console.log(json)
      // message.success("bookingadded")
    } catch (error) {
      console.log("error in frontend add booking frontend" + error);
    }
  };
  const [bookingSummary, setbookingSummary] = useState({});
 // https://umrah-ride-backend-wr.vercel.app/api/bookings/fetchallpackages
  //below are the reques for fetching bookings http://localhost:8000/api/bookings/fetchallpackages
  const fetchallpackages = async () => {
    try {
      setisSpin(true);
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/bookings/fetchallpackages",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let json = await response.json();
      console.log(json);
      setpackages(json);
      // console.log("cars")
      setisSpin(false);
    } catch (error) {
      console.log("error in frontend fetchallpackages" + error);
    }
  };

  //api request to add pkgbooking http://localhost:8000/api/bookings/addpkgbooking

  const addpkgbooking = async (bookPackage) => {
    console.log("ok");
    //  console.log(bookPackage.datepicker.$d)
    pkgbooking.name = bookPackage.name;
    pkgbooking.email = bookPackage.email;
    pkgbooking.datepicker = bookPackage.datepicker.$d;
    pkgbooking.vehicleid = choosedPackage.vehicle._id;
    pkgbooking.packageid = choosedPackage._id;
    pkgbooking.isPackage = true;
    pkgbooking.bookingstatus = "0";
    // console.log("pkgbooking",pkgbooking)

    try {
      const response = await fetch(
        "https://umrah-ride-backend-wr.vercel.app/api/bookings/addpkgbooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("jwtoken"),
          },
          body: JSON.stringify({ pkgbooking }),
        }
      );
      let json = await response.json();
      //console.log("from addpkgbooking")
      // console.log(json)
      message.success("pkgbookingadded");
      setisModelOpen(false);
    } catch (error) {
      console.log("error in frontend add pkg booking frontend" + error);
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
        // handleClick,
        isDisplaygetOTP,
        otpCode,
        setotpCode,
        // verifyOtp,
        setupRecaptcha,
        addUser,
        bookingInfo,
        setbookingInfo,
        selectPackage,
        setselectPackage,
        addbooking,
        // addpkg,
        fetchdestinations,
        destinations,
        showspecificcar,
        selectedcars,
        fetchspecificcars,
        selectedcars,
        bookingSummary,
        setbookingSummary,
        fetchallpackages,
        isSpin,
        setisSpin,
        isModelOpen,
        setisModelOpen,
        choosedPackage,
        setchoosedPackage,
        addpkgbooking,
      }}
    >
      {props.children}
    </carContext.Provider>
  );
};
export default CarState;
