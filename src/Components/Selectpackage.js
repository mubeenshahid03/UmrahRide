import React, { useEffect, useState } from 'react'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
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
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
function Selectpackage() {
  
    const {cars,setcars,fetchallvehicles,selectPackage,addpkg,addbooking,fetchspecificcars,selectedcars}=useContext(carContext)
    
    
    const navigate =useNavigate()
    useEffect(() => {
      fetchspecificcars()
    }, [])
      const handlearrowright=()=>{
        
        
        
        if(!localStorage.getItem("jwtoken")){
          navigate('/login')
          message.info("Please Login")
        }
        else{
          if(selectPackage){
            addbooking()
            //here is the component of personzel info 
            navigate('/customerinfo')
          }
          else{
            return message.error("Please Select package")
          }


        } 
      

        
      }
      const handlearrowleft=()=>{
        navigate('/home')
      }


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
        // overflowY: 'auto', // Setting overflow to auto makes it scrollable if content exceeds the height
      
      }}
    >
        
      {selectedcars.map((car, index) => (
        <div id='scrollspy-div'><Scrlspycrd  car={car.vehicle} key={index} /> </div>
      ))}
        
    </div>
    <div className='selectpackage-btn-div'> 
    <Button
                htmlType="submit"
                shape="circle"
                icon={<ArrowLeftOutlined />}
                size="large"
                style={{border:"none"}}
                onClick={handlearrowleft}

              />
        <Button
                htmlType="submit"
                shape="circle"
                icon={<ArrowRightOutlined />}
                size="large"
                style={{border:"none"}}
                onClick={handlearrowright}

              />
              
    </div>
        
    
    </>
  )
}

export default Selectpackage