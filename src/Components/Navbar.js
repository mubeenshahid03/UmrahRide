import { Button } from "antd";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  return (
    
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home" onClick={closeMenu}> 
            UmrahRide.co
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}

          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen? "show":"" }`} id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home" onClick={closeMenu}>
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vehicles" onClick={closeMenu}>
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages" onClick={closeMenu}>
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus" onClick={closeMenu}>
                  ContactUs
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/login"onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/otp" onClick={closeMenu}>
                  OTP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/selectpackage" onClick={closeMenu}>
                  Selectpackage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customerinfo" onClick={closeMenu}>
                  Cutomerinfo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookingsummary" onClick={closeMenu}>
                  booking summary
                </Link>
              </li> */}
              
            </ul>
          </div>
          <div className="nav-icons d-flex justify-content-evenly align-items-center">
            <div className="icon">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.uafc.dev&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <img
                  height="50px"
                  width="140px"
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
            <div className="icon mx-1">
              <a target="_blank"  href="https://apps.apple.com/pk/app/umrah-ride/id1608199734">
              <img height="32px" width="110px" src="app-str.png" />
              </a>
            </div>
            <div className="icon">
            <a target="_blank" href="https://www.facebook.com/www.alfaizancab/">  
              <img height="30px" width="30px" src="fb-icon.png" />
            </a>
            </div>
            
            <div className="icon">
              <a target="_blank" href="https://www.instagram.com/tourism_company_jeddah/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
              <img height="30px" width="30px" src="inst-icon.png" />
              </a>
            </div>
            <div className="icon ">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=+966565605416&text=Hello%20Umrah%20Ride%20Service">
              <img height="30px" width="30px" src="wts-icon.png" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
