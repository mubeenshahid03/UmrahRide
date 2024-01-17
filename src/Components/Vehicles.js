import { Button, Col, Row } from 'antd'
import react from 'react'
import Card from './Card'
import { useContext,useEffect } from 'react'
import carContext from '../context/cars/carContext'

function Vehicles() {
  const {cars,setcars,fetchallvehicles,filtervehicles} =useContext(carContext);
  useEffect(() => {
    fetchallvehicles()
  }, [])

  const handlebuttonsclick=(event)=>{
    console.log(event.target.name)
    filtervehicles(event.target.name)
  }
  return (
    <>
<div className='background-container'>

    <div className='div-btn '>
      <Row className='div-btn-row'>
        <Col span={4} ><button  id='login-btns' name='all' type="button" onClick={fetchallvehicles} class="btn btn-outline-light ">All</button></Col>
        <Col span={4} ><button  id='login-btns' name='sedan' type="button" onClick={handlebuttonsclick} class="btn btn-outline-light ">Car</button></Col>
        <Col span={4} ><button  id='login-btns'  name='bus'   type="button" onClick={handlebuttonsclick} class="btn btn-outline-light ">Bus</button></Col>
        <Col span={4} ><button  id='login-btns'  name='minibus' type="button" onClick={handlebuttonsclick} class="btn btn-outline-light ">Minibus</button></Col>
        <Col span={4} ><button  id='login-btns' name='suv' type="button" onClick={handlebuttonsclick} class="btn btn-outline-light ">SUV</button></Col>
      </Row>
    </div>
    
    <div className='custom-card'>

  <Row className='vehicles-card-row' >  
 {
        cars.map((car,index)=>{
           return <Col xs={24} sm={12} md={12} lg={10} xl={10}  style={{marginTop:"40px"}} >  <Card car={car} key={index}/> </Col>

        })
      }
</Row>

    </div>
    

    </div>
    </>
  )
}

export default Vehicles