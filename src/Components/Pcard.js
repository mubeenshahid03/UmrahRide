import { Col } from "antd";
import React, { useContext } from "react";
import carContext from "../context/cars/carContext";
import { useNavigate } from "react-router-dom";
function Pcard(props) {
  const { isModelOpen, setisModelOpen, choosedPackage, setchoosedPackage } =
    useContext(carContext);
  const navigate = useNavigate();
  const handleClick = (values) => {
    let isUserLogin = localStorage.getItem("jwtoken");

    console.log(values);

    if (isUserLogin) {
      setchoosedPackage(values);
      setisModelOpen(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <Col style={{ backgroundColor: "black", opacity: 0.9 }}>
          <div className="card-item">
            <h4 style={{ color: "white" }}>{props.car.title}</h4>
            <div className="card-img">
              <img src={props.detail.imgURL} />
            </div>
            <h6 style={{ color: "white" }}>{props.car.description}</h6>
            {/* leftcontent of card */}
            <div
              className="card-left-content "
              style={{ color: "white", fontSize: "1.1em" }}
            >
              <h5>{props.detail.name}</h5>
              <br></br>
              <p>{`Car type,${props.detail.cartype}`}</p>
              <p>{`Seats ${props.detail.seats} , Bags ${props.detail.bags}`}</p>
              <p>
                AC:{" "}
                <span style={{ fontWeight: "bold", color: "lightgreen" }}>
                  ✓
                </span>
                {/* , Doors: {props.detail.doors} */}
              </p>
            </div>

            <button
              className="card-btn btn btn-outline-light"
              onClick={() => handleClick(props.car)}
            >
              {`${props.car.price} SAR `}
            </button>
          </div>
        </Col>
      </div>
    </>
  );
}

export default Pcard;
