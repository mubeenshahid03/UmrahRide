import React, { useContext, useState } from 'react';
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import carContext from '../context/cars/carContext';
import { CalendarFilled } from '@ant-design/icons';
function Bookingmodel() {
    const{isModelOpen,
        setisModelOpen,bookPackage,
        setbookPackage,addpkgbooking}=useContext(carContext)
    
  const showModal = () => {
    setisModelOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setisModelOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setisModelOpen(false);
  };
  const onFinish=(e)=>{
console.log(e)
addpkgbooking(e)
  }

    return (
    <>
    
      <Modal
        title={<h3 style={{ textAlign: 'center' }}>Booking Details</h3>}
        open={isModelOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          hidden:true,
        }}
        cancelButtonProps={{
        hidden:true,
        }}
      >
        <Form
            name="professional-login-form"
            onFinish={onFinish}
            layout="vertical"
            
          >
          
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter name' },
                { min: 3, message: 'name must be at least 3 characters' },
              ]}
            >
              <Input size="large" placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter email' },
                { min: 3, message: 'email must be at least 3 characters' },
              ]}
            >
              <Input size="large" placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              label="phone"
              name="phone"
              rules={[
                { required: true, message: 'Please enter phone' },
                
              ]}
            >
              <Input size="large" placeholder="Enter phone" />
            </Form.Item>
            <Form.Item
                name="datepicker"
                
                label="Booking Date"
                rules={[{ required: true, message: "Select date" }]}
              >
                <DatePicker
                  className="mx-2"
                 
                />
              </Form.Item>
            
            
            
            
            <Form.Item>
              <Button type="primary"  htmlType="submit" size="large" style={{ width: '100%' }}>
                Confirm Booking
              </Button>
            </Form.Item>
             
          </Form>
      </Modal>
    
    
    </>
  )
}

export default Bookingmodel