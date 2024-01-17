import { Col } from 'antd'
import React from 'react'

function Pcard(props) {


    return (
    <>
    
    <div>
        <Col  style={{ backgroundColor: "black", opacity: 0.9 }}>
          <div className="card-item">
            <h4 style={{color:"white"}}>{props.car.heading}</h4>
            <div className="card-img">
              <img src="https://images.pexels.com/photos/215528/pexels-photo-215528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
            <h6 style={{color:"white"}}>{props.car.description}</h6>
            {/* leftcontent of card */}
            <div
              className="card-left-content "
              style={{ color: "white", fontSize: "1.1em" }}
            >
              <h5>{props.car.name}</h5>
              <br></br>
              <p>{`Car type,${props.car.type}`}</p>
              <p>{`Seats ${props.car.seats} , Bags ${props.car.bags}`}</p>
              <p>
                AC:{" "}
                <span style={{ fontWeight: "bold", color: "lightgreen" }}>
                  ✓
                </span>
                , Doors: {props.car.doors}
              </p>
            </div>
            
            <button className="card-btn btn btn-outline-light">
             {` Book for ${props.car.price} SAR`}
            </button>
          </div>
        </Col>
      </div>
    
    
    
    </>
  )
}

export default Pcard