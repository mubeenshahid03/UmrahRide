import React from 'react'
import { useContext } from 'react'
import carContext from '../context/cars/carContext'
function Scrlspycrd(props) {
  const{selectPackage,setselectPackage}=useContext(carContext)
  const handleselectpackage=()=>{
    console.log(props.car)
    setselectPackage(props.car)
    

  }


  return (
    <>
    <div id='scrlspycrd' onClick={handleselectpackage}>
    <img    src="https://images.pexels.com/photos/215528/pexels-photo-215528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <span>
        <h5>{props.car.name}</h5>
        <p>Car type : {props.car.type} </p>
        <p style={{fontSize:"12px"}}>Seates : {props.car.seats} , Bags : {props.car.bags}</p>
            <p style={{fontSize:"12px"}} > AC:{" "}
                <span style={{ fontWeight: "bold", color: "lightgreen" }}>
                  ✓
                </span>
                , Doors: {props.car.doors}</p>
        </span>
    <p  style={{color:"skyblue",fontSize:"15px"}}> <span style={{fontWeight:500}}>{props.car.price}</span>{" "} SAR</p>
    </div>

    </>
  )
}

export default Scrlspycrd