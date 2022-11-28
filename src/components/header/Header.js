import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { brandlogo } from "../../asset";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useAuth } from "../../context/authContext";

export const Header = () => {
  const {user}= useAuth();
  return (
    <>
      <div className="header">
        <Link to="/" className="brand-title">
          <img src={brandlogo} className="brand-logo" alt="brand-logo" />
          <div className="">NeosTube</div>
        </Link>
        {/* code for future use */}
        {/* <div className="searchbar-container">
          <input placeholder="Type to search videos " className="search-input" />
          <SearchRoundedIcon sx={{ fontSize: 37 }} className="search-icon" />
        </div> */}
        {user?  <Link to="/profile" className="login-button">
          <PersonIcon sx={{ fontSize: 35 }} />
        </Link> : 
        <Link to="/login" className="login-button">
          <PersonIcon sx={{ fontSize: 35 }} />
        </Link>}
      
      </div>
    </>
  );
};
