import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Select } from 'antd';

function login() {

    // below are the built functions of compnonet select 
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
      
      // Filter `option.label` match the user type `input`
      const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
//above functions are built in for select components
    
  return (
    <>
<div className='login-container'>
    <div className='login-header' style={{color:"white"}}>
        
        <h3 className='logo-otp'>UmrahRide.co</h3>
        <p style={{color:"white"}}><Link style={{color:"white"}} to='/login'>Login</Link>/<Link style={{color:"white"}} to="/*">Register</Link></p>
    </div>
    <br />
    <label style={{color:"white",display:"block"}} htmlFor="hotel_name" className="label-booking">
              Phone Number:
            </label>
            
    <div className='login-phone'>
    
    <Select
   
    className='login-phone-code'
    showSearch
    placeholder="PK(+92)"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
  <Input className='login-phone-input' type='number' placeholder="Your Number" />
    </div>
    <button id='login-btn' type="button" class="btn btn-success ">Login/Signup</button>
    
</div>
    </>
  )
}

export default login