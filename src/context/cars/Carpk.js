import react, { useState } from "react";
import carContext from "./carContext";

const CarState=(props)=>{
// const  obj={
//     "name":"mubeen",
//     "rollno":"123"
// }

let iCars=[{
"id":"1",
"name":"Sedan",
"img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuyHVv3eyblgwJChAZatK4GeTus2jYIFmZmh8yhDE3w&s",
"type":"car",
"bags":"2",
"seats":"4",
"doors":"4",
"price":"1500",
},
{
"id":"2",
"name":"Hyundia",
"img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYyVhfMYLCWnw-kUxDc01YQQ_GY2PBHXabsjQokFjXQ&s",
"type":"suv",
"bags":"6",
"seats":"6",
"doors":"4",
"price":"1200",
},
{
"id":"3",
"name":"Gmc",
"img_url":"https://www.shutterstock.com/image-photo/novosibirsk-russia-april-25-2023-260nw-2313792979.jpg",
"type":"suv",
"bags":"4",
"seats":"7",
"doors":"4",
"price":"1800",
},
{
    "id":"4",
    "name":"Toyota",
    "img_url":"https://thumbs.dreamstime.com/b/toyota-hiace-white-minivan-toyota-hiace-white-minivan-motion-blurred-background-159162355.jpg",
    "type":"minibus",
    "bags":"6",
    "seats":"10",
    "doors":"4",
    "price":"1600",
    },
{
"id":"5",
"name":"Hyundia",
"img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6B6g25gAgzLFpm6xVE-RzFXt9GDcYfPaTo09EZCtdQ&s",
"type":"suv",
"bags":"5",
"seats":"7",
"doors":"4",
"price":"1000",
},
{
    "id":"6",
    "name":"Bus",
    "img_url":"https://cdn.britannica.com/72/146072-050-124A752E/Greyhound-bus.jpg",
    "type":"bus",
    "bags":"12",
    "seats":"49",
    "doors":"2",
    "price":"800",
    },

    {
        "id":"7",
        "name":"Toyota",
        "img_url":"https://www.shutterstock.com/image-photo/karawang-west-java-indonesia-may-260nw-2324862499.jpg",
        "type":"minibus",
        "bags":"8",
        "seats":"24",
        "doors":"2",
        "price":"2500",
        },
        
    {
        "id":"8",
        "name":"Honda",
        "img_url":"https://www.shutterstock.com/image-photo/karawang-west-java-indonesia-may-260nw-2324862499.jpg",
        "type":"suv",
        "bags":"4",
        "seats":"7",
        "doors":"4",
        "price":"2300",
        },

]

let iPackages=[{
    "id":"1",
    "name":"Sedan",
    "heading":"Package (1) With Ziarah",
    "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuyHVv3eyblgwJChAZatK4GeTus2jYIFmZmh8yhDE3w&s",
    "description":"Jeddah Airport To Makkah Makkah Hotel To Makkah Ziarah Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Makkah Hotel Makkah Hotel To Jeddah Airport",
    "type":"car",
    "bags":"2",
    "seats":"4",
    "doors":"4",
    "price":"1500",
    },
    {
    "id":"2",
    "name":"Hyundia",
    "heading":"Package(1)",
    "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYyVhfMYLCWnw-kUxDc01YQQ_GY2PBHXabsjQokFjXQ&s",
    "description":"Jeddah Airport To Makkah Hotel Makkah Hotel To Madinah Hotel Madinah Hotel To Makkah Hotel Makkah Hotel To Jeddah Airport",
    "type":"suv",
    "bags":"6",
    "seats":"6",
    "doors":"4",
    "price":"1300",
    },
    {
    "id":"3",
    "name":"Gmc",
    "heading":"Package(2) with Ziarah",
    "img_url":"https://www.shutterstock.com/image-photo/novosibirsk-russia-april-25-2023-260nw-2313792979.jpg",
    "description":"Jeddah Airport To Makkah Hotel Makkah Hotel To Makkah Ziarah Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Madinah Airport",
    "type":"suv",
    "bags":"4",
    "seats":"7",
    "doors":"4",
    "price":"1200",
    },
    {
        "id":"4",
        "name":"Toyota",
        "heading":"Package(2) with Ziarah",
        "img_url":"https://thumbs.dreamstime.com/b/toyota-hiace-white-minivan-toyota-hiace-white-minivan-motion-blurred-background-159162355.jpg",
        "description":"Jeddah Airport To Makkah Hotel Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Airport",
        "type":"minibus",
        "bags":"6",
        "seats":"10",
        "doors":"4",
        "price":"1000"
        },
    {
    "id":"5",
    "name":"Hyundia",
    "heading":"Package(3) with Ziarah",
    "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6B6g25gAgzLFpm6xVE-RzFXt9GDcYfPaTo09EZCtdQ&s",
    "description":"Jeddah Airport To Makkah Hotel Makkah Hotel To Makkah Ziarah Makkah Hotel To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Jeddah Airport",
    "type":"suv",
    "bags":"5",
    "seats":"7",
    "doors":"4",
    "price":"1450"
    },
    {
        "id":"6",
        "name":"Bus",
        "heading":"Package(3)",
        "img_url":"https://cdn.britannica.com/72/146072-050-124A752E/Greyhound-bus.jpg",
        "description":"Jeddah Airport To Makkah Hotel Makkah Hotel To Madinah Hotel Madinah Hotel To Jeddah Airport",
        "type":"bus",
        "bags":"12",
        "seats":"49",
        "doors":"2",
        "price":"1350"
        },
    
        {
            "id":"7",
            "name":"Toyota",
            "heading":"Package(4) with Ziarah",
            "img_url":"https://www.shutterstock.com/image-photo/karawang-west-java-indonesia-may-260nw-2324862499.jpg",
            "description":"Madinah Airport To Madinah Hotel Madinah Hotel To Madinah Ziarah Madinah Hotel To Makkah Hotel Makkah Hotel To Makkah Ziarah Makkah Hotel To Jeddah Airport",
            "type":"minibus",
            "bags":"8",
            "seats":"24",
            "doors":"2",
            "price":"1200",
            },
            
        {
            "id":"8",
            "name":"Honda",
            "heading":"Package(4)",
            "img_url":"https://www.shutterstock.com/image-photo/karawang-west-java-indonesia-may-260nw-2324862499.jpg",
            "description":"Madinah Airport To Hotel Madinah Hotel To Makkah Hotel Makkah Hotel To Jeddah Airport",
            "type":"suv",
            "bags":"4",
            "seats":"7",
            "doors":"4",
            "price":"800",
            },
    
    ]
const [cars, setcars] = useState(iCars)
const [packages, setpackages] = useState(iPackages)
const userid="123"
 const [imgURL, setimgURL] = useState(null)
let host="http://localhost:8000/"

// api request to fetch all vehicles
const fetchallvehicles=async()=>{
    try {
        const response=await fetch(`http://localhost:8000/api/vehicles/fetchallvehicles/${userid}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })
       let  json=await response.json()
       console.log(json)
       setcars(json)
    } catch (error) {
        console.log("error in frontend fetchallvehicles"+error)
    }
}

//api request to filter vehicles with cartype
const filtervehicles=async(cartype)=>{
    try {
        const response=await fetch(`http://localhost:8000/api/vehicles/filtervehicles/${cartype}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
       let  json=await response.json()
       console.log(json)
       setcars(json)
    } catch (error) {
        console.log("error in frontend fitervehicles"+error)
    }
}



const sendimg=async(formData)=>{
    try {
        const response= await fetch('http://localhost:8000/api/upload',{
            method:"POST",
            body:formData,
        })
        const json= await response.json()
        console.log(json.imagePath)
        const imagePath = json.imagePath;
       
        // setimgURL(imagePath)
        const completeImagePath = host + imagePath;  // Concatenate with host
        console.log(completeImagePath)
        setimgURL(completeImagePath);
        

    } catch (error) {
        console.log("error in frontend sendimg")
    }
}


return(
 <carContext.Provider value={{cars,setcars,packages,setpackages,fetchallvehicles,sendimg,imgURL,filtervehicles}} >
    {props.children}
 </carContext.Provider>

)


}
export default CarState;