import React, { useEffect, useState } from "react";
import carContext from "../context/cars/carContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import Spinner from "./Spinner";
function Userbookings() {
  const { bookingSummary, setbookingSummary, isSpin, setisSpin } =
    useContext(carContext);
  const [ubookings, setubookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUserBookings();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  
  const handleClick = (booking) => {
    console.log(booking);
    setbookingSummary(booking);
    localStorage.setItem("bookingsummary", JSON.stringify(booking));
    navigate("/bookingsummary");
  };
  const handleDelete = async (booking) => {
    console.log(booking);
    console.log(booking._id);
    try {
      const response = await fetch(
        "http://localhost:8000/api/bookings/deletebooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("jwtoken"),
          },
          body: JSON.stringify({ bookingid: booking._id }),
        }
      );
      let json = await response.json();
      console.log(json);
      fetchUserBookings();
    } catch (error) {
      console.log("error from UserBookinng", error);
    }
  };

  const fetchUserBookings = async () => {
    setisSpin(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/pricings/userbookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("jwtoken"),
          },
        }
      );
      let json = await response.json();
      console.log(json);
      setubookings(json);
      setisSpin(false);
    } catch (error) {
      console.log("error from UserBookinng", error);
    }
    // let dat=new Date(booking.datepicker)
    // console.log(dat)
  };

  return (
    <>
      <div id="maincontainer-ubookings">
        <h3 style={{ marginBottom: "30px", textAlign: "center" }}>
          Bookings Summary{" "}
        </h3>
        <div class="table-responsive">
          {isSpin ? (
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <Spinner />
            </div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">imgURL</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Car</th>
                  <th scope="col">Cartype</th>
                  <th scope="col">Date</th>
                  <th scope="col">time</th>

                  <th scope="col">pickup from</th>
                  <th scope="col">Price</th>
                  <th scope="col">Booking status</th>
                  <th>buttons</th>
                </tr>
              </thead>
              <tbody>
                {ubookings.map((booking) => (
                  <tr key={booking._id} id="table-row">
                    <td>
                      <img
                        height="80px"
                        width="80px"
                        src={booking.vehicle.imgURL}
                        alt={booking.vehicle.name}
                        onClick={() => handleClick(booking)}
                      />
                    </td>
                    <td>{booking.user.phone}</td>
                    <td>
                      {booking.isPackage ? (
                        <Tooltip title={booking.pkg.description}>
                          <span>booking description</span>
                        </Tooltip>
                      ) : (
                        <span>
                          {booking.destination.from} to {booking.destination.to}
                        </span>
                      )}
                    </td>
                    <td>{booking.vehicle.name}</td>
                    <td>{booking.vehicle.cartype}</td>
                    <td>{formatDate(booking.datepicker)}</td>

                    <td>{ booking.timepicker? booking.timepicker : "null"}</td>
                    <td>
                      {booking.isPackage
                        ? booking.pkg.title
                        : booking.hotel_name
                        ? booking.hotel_name
                        : booking.flightno}
                    </td>
                    <td>
                      {booking.isPackage
                        ? booking.pkg.price
                        : booking.pricing.price}
                    </td>
                    <td>
  {new Date(booking.datepicker + 'T' + booking.timepicker).getTime() -
    new Date().getTime() >
    24 * 60 * 60 * 1000
    ? "present"
    : "outdated"}
</td>
                    <td>
                    <td>
  {new Date(booking.datepicker + 'T' + booking.timepicker).getTime() -
    new Date().getTime() >
    24 * 60 * 60 * 1000 && (
    <button
      className="btn btn-danger"
      onClick={() => handleDelete(booking)}
    >
      Delete
    </button>
  )}
</td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Userbookings;
