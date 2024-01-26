const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    customerName:{
        type:String,
        required:true,
    },
    customerEmail:{
        type:String,
        required:true,
    },
    customerWhatsapp:{
        type:String,
        required:true,
    },
    phone: {
        type: String,
        required: true,
    },
    bookings: {
        destination: {
            type: String,
            required: true,
        },
        hotelname: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        pickup: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
            required: true,
        }
    },
    packages: {
        date: {
            type: String,
            required: true,
        },
        carname: {
            type: String,
            required: true,
        },
        cartype: {
            type: String,
            required: true,
        },
        seats: {
            type: String,
            required: true,
        },
        bags: {
            type: String,
            required: true,
        },
        doors: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        }
    }
});

const User = mongoose.model('User', userSchema, "users");
module.exports = User;
