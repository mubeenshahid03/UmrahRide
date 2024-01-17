import React from 'react'
import {
    CarFilled,
    EnvironmentFilled,
    LeftCircleFilled,
    ProfileFilled,
    RightCircleFilled,
    ScheduleFilled,
  } from "@ant-design/icons";
import Scrlspycrd from './Scrlspycrd';
import { useContext } from 'react';
import carContext from '../context/cars/carContext';
function Selectpackage() {
    const {cars,setcars}=useContext(carContext)



    return (
    <>
    <div className="header">
        <h3 className="header-h6 mt-5">Welcome! Book you umrah ride</h3>
        <h6 className="header-h6 mb-5">Book now bets cab service</h6>
      </div>

      <div>
        <table style={{ width: "50%", height: "auto", margin: "auto" }}>
          <tr>
            <td>
              <div className="step-icon">
                {" "}
                <EnvironmentFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
            <td style={{ width: "30%", color: "white" }}>
              <hr />
            </td>
            <td>
              <div className="step-icon">
                <CarFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
            <td style={{ width: "30%", color: "white" }}>
              <hr  />
            </td>
            <td>
              <div className="step-icon">
                <ProfileFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
            <td style={{ width: "30%", height: "2px", color: "white" }}>
              <hr />
            </td>
            <td>
              <div className="step-icon">
                <ScheduleFilled
                  style={{
                    color: "black",
                    paddingLeft: "12px",
                    paddingTop: "12px",
                  }}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>

      {/* model code boostrap component */}
      <div
      id='scrollspy'
      style={{
        
        backgroundColor: 'white',
        overflowY: 'auto', // Setting overflow to auto makes it scrollable if content exceeds the height
      }}
    >
        
      {cars.map((car, index) => (
        <div id='scrollspy-div'><Scrlspycrd car={car} key={index} /> </div>
      ))}
        
    </div>
    <div className='selectpackage-btn-div'> 
        <LeftCircleFilled   className='selectpackage-btns' />
        <RightCircleFilled className='selectpackage-btns'  />
    </div>
        
    
    </>
  )
}

export default Selectpackage