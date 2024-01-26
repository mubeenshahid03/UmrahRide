const express = require("express");
const router = express.Router();
const fetchuser = require("../Middleware/fetchuser");
const User = require("../model/User");
var jwt=require("jsonwebtoken")
const MY_SECRET_KEY="IAMMUBEENIAMA$OODBOY"
// path 1   http://localhost:8000/api/users/adduser
router.post("/adduser", async (request, response) => {
    console.log(request.body)
    console.log("request body")
    try {
    const { phone, booking } = request.body;
   
    let registeredUser= await User.findOne({phone:phone})
    if(registeredUser){
        const olddata={
            user:{
            id:registeredUser.id
            },
        }
        const authtoken =await jwt.sign(olddata,MY_SECRET_KEY)
        
        response.json({authtoken,registeredUser})
    }
    else{
        //creat and save user in DB
    let newuser =await User.create({ phone, booking });
    
    
    const data={
        user:{
        id:newuser.id
        },
    }
    const authtoken =await jwt.sign(data,MY_SECRET_KEY)
    
    response.json({authtoken,newuser})
    
    }
  } catch (error) {
    console.log("error in backemd add user path");
    console.log(error)
   
    response.status(400).json({ error: "Error in backend add user path" });
  }
});

//   2 route of api/users/getuser
router.post('/getuser',fetchuser, async (request,response)=>{
    try {
      const userId =request.user.id
      const fnluser = await User.findById(userId)
      response.send(fnluser)
    } catch (error) {
      console.log("error in api/users/getuser"+error)
    }
  })
  

  // route 3 add packages  obj in arrays  http://localhost:8000/api/users/addpkg
  router.post('/addpkg',fetchuser, async (request,response)=>{
    console.log(request.body)
    try {
      if(!request.body.selectPackage){
        return response.status(401).json({error:"body not received in add pkg"})
      }
      

       // Updating the user document by pushing the booking and package objects into their respective arrays
       const updatedUser = await User.findByIdAndUpdate(
        request.user.id,
        {
          $set: {
            'packages.carname': request.body.selectPackage.name,
            'packages.cartype':request.body.selectPackage.cartype,
            'packages.seats':request.body.selectPackage.seats,
            'packages.bags':request.body.selectPackage.bags,
            'packages.price':request.body.selectPackage.price,
            'packages.doors':"4",
            "packages.date":"82828"
        },
        },
        { new: true }
    );

    response.json(updatedUser);
      
    } catch (error) {
      console.log("error in api/users/addpkg"+error)
    }
  })

// route 4 add booking obj inDB  http://localhost:8000/api/users/addbooking
router.post('/addbooking', fetchuser, async (request, response) => {
  try {
    console.log("from backend");
    console.log(request.body);

    if (!request.body.bookingInfo) {
      return response.status(401).json({ error: "body not received in add booking" });
    }

    // Updating the user document by setting the bookings field with the new bookingInfo
    const updatedUser = await User.findByIdAndUpdate(
      request.user.id,
      {
        $set: {
          'bookings.destination': request.body.bookingInfo.destination,
          'bookings.hotelname':request.body.bookingInfo.hotel_name,
          'bookings.date':request.body.bookingInfo.datepicker,
          'bookings.pickup':request.body.bookingInfo.pickup,
          'bookings.comments':request.body.bookingInfo.comments,
        },
      },
      { new: true }
    );

    response.json(updatedUser);
  } catch (error) {
    console.log("error in api/users/addbooking" + error);
  }
});


//5 route  store customer info in their documents http://localhost:8000/api/users/customerinfo
router.post('/customerinfo', fetchuser, async (request, response) => {
  console.log(request.body)
  try {
    const{customerName,customerEmail,customerWhatsapp}=request.body.customerInfo
    if(!customerName||!customerEmail||!customerWhatsapp){
      return response.status(401).json({error:"note received the complete customerinfo"})
    }
    const updatedUser = await User.findByIdAndUpdate(
      request.user.id,
      {
        $set: {
          'customerName': customerName,
          'customerEmail':customerEmail,
          'customerWhatsapp':customerWhatsapp
        },
      },
      { new: true }
    );

    response.json(updatedUser);
    
    response.json();
  } catch (error) {
    console.log("error in api/users/customerinfo" + error);
  }
});

//route 6 fetch package object in User schemaa or database and show it in bookigsummary.js http://localhost:8000/api/users/bookingsummary

router.get('/bookingsummary',fetchuser, async (request,response)=>{
  try {
    const userId =request.user.id
    const fnluser = await User.findById(userId)
    const bookingsummary=fnluser.packages
    response.send(bookingsummary)
  } catch (error) {
    console.log("error in api/users/bookingsummary backend"+error)
  }
})





module.exports = router;
