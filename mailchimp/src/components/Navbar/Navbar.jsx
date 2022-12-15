import React from "react";
import "./Navbar.css";
import { Button } from "@chakra-ui/react";
import Applogo from "../../assets/Applogo3.png";
import website from "../../assets/website.png";
import search from "../../assets/search.png";
import DrawerExample from "./Drawer";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>

        <DrawerExample />
      </div>
      <div className="navbar-div-1">
        <h3>Products</h3>
        <h3>Resources</h3>
        <h3>Inspirations</h3>
        <h3>Pricing</h3>
      </div>
      <div className="navbar-div-3">
        <img src={Applogo} alt="cyber-domain" />
      </div>
      <div className="navbar-div-2">
        <div className="sales">
          <h3>Sales:</h3>
          <span>+1(800)315-5939 </span>
        </div>
        <img src={website} alt="website" />
        <img src={search} alt="search" />
        <Button
          className="btn-signup"
          w="100%"
          h="50px"
          paddingLeft="25px"
          paddingRight="25px"
          fontSize="14px"
          borderRadius="50px"
          background="white.200"
          border="1px solid black"
          pos="-moz-initial"
          fontWeight="bold"
        >
          Login
        </Button>
        <Button
          className="btn-signup"
          w="100%"
          h="50px"
          paddingLeft="25px"
          paddingRight="25px"
          fontSize="14px"
          borderRadius="50px"
          background="#ffe01b"
          border="1px solid black"
          pos="-moz-initial"
          fontWeight="bold"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
