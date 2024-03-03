import { Col } from "antd";
import React from "react";

function Card(props) {
  return (
    <>
      <div>
        <Col style={{ backgroundColor: "black", opacity: 0.9 }}>
          <div className="card-item">
            <div className="card-img">
              <img src={props.car.imgURL} />
            </div>
            {/* leftcontent of card */}
            <div
              className="card-left-content "
              style={{ color: "white", fontSize: "1.1em" }}
            >
              <h5>{props.car.name}</h5>
              <br></br>
              <p>{`Car type,${props.car.cartype}`}</p>
              <p>
                AC:{" "}
                <span style={{ fontWeight: "bold", color: "lightgreen" }}>
                  ✓
                </span>
                , Doors: {props.car.doors}
              </p>
            </div>
            {/* right content of card */}
            <div
              className="card-right-content"
              style={{ color: "white", fontSize: "1.1em" }}
            >
              <p
                style={{ paddingLeft: "30%" }}
              >{`Seats ${props.car.seats} , Bags ${props.car.bags}`}</p>
            </div>
            {/* card button */}
            <button className="card-btn btn btn-outline-light">
              Book Now!
            </button>
          </div>
        </Col>
      </div>
    </>
  );
}

export default Card;
