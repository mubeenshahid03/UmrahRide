import React, { useState } from "react";
import { useContext } from "react";
import carContext from "../context/cars/carContext";
function Scrlspycrd(props) {
  const { selectPackage, setselectPackage } = useContext(carContext);

  const [isClicked, setIsClicked] = useState(false);

  const handleselectpackage = () => {
    console.log(props.car);
    setselectPackage(props.car);
    setIsClicked(true);
  };

  return (
    <>
      <div
        id="scrlspycrd"
        onClick={handleselectpackage}
        className={isClicked ? "clicked" : ""}
      >
        <img src={props.car.imgURL} />
        <span>
          <h5>{props.car.name}</h5>
          <p>Car type : {props.car.cartype} </p>
          <p style={{ fontSize: "12px" }}>
            Seates : {props.car.seats} , Bags : {props.car.bags}
          </p>
          <p style={{ fontSize: "12px" }}>
            {" "}
            AC:{" "}
            <span style={{ fontWeight: "bold", color: "lightgreen" }}>✓</span>,
            Doors: {props.car.doors}
          </p>
        </span>
        <p style={{ color: "skyblue", fontSize: "15px" }}>
          {" "}
          <span style={{ fontWeight: 500 }}>{props.price}</span> SAR
        </p>
      </div>
    </>
  );
}

export default Scrlspycrd;
