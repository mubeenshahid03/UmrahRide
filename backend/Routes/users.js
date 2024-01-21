const express = require("express");
const router = express.Router();
const fetchuser = require("../Middleware/fetchuser");
const User = require("../model/User");

// path 1   http://localhost:8000/api/users/adduser
router.post("/adduser", fetchuser, async (request, response) => {
    console.log(request.body)
    console.log("request body")
    try {
    const { phone, booking } = request.body;
   
    let registeredUser= await User.findOne({phone:phone})
    if(registeredUser){
        return response.status(401).json({message:"User Already registered"})
    }
    else{
    let user = new User({ phone, booking });
    let savedUser = await user.save();
    response.status(200).json(savedUser);
    }
  } catch (error) {
    console.log("error in backemd add user path");
    response.status(400).json({ error: "Error in backend add user path" });
  }
});

module.exports = router;
