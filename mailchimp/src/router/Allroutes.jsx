import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Homepage/MainPage";
import Products from "../pages/Products/Products"
import OnlineStores from "../pages/Products/Online_Store/OnlineStores";
import Pricing from "../pages/Pricing/Pricing";
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import Main from "../pages/CyberDomain - 101/Main"
import PresentsMainPage from "../pages/CyberDomainPresents/PresentsMainPage"
import HelpCenterMainPage from "../pages/HelpCenter/HelpCenterMainPage"
import Login from "../AdminPanel/Login";
import AddProduct from "../AdminPanel/AddProduct";
import CBMainPage from "../pages/CyberDomain - 101/CBMainPage"
const Allroutes = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}> </Route>
      <Route path="/products" element={<Products/>}> </Route>
      <Route path="/onlinestores" element={<OnlineStores/>}> </Route>
      <Route path="/pricing" element={<Pricing/>}> </Route>
      <Route path="/loginpage" element={<LoginPage/>}> </Route>
      <Route path="/signuppage" element={<SignupPage/>}> </Route>
      <Route path="/main" element={<Main/>}>  </Route>
      <Route path="/presents" element={<PresentsMainPage/>}> </Route>
      <Route path="/help-center" element={<HelpCenterMainPage />}> </Route>
      <Route path="/cyberdomain101" element={<CBMainPage/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/addproduct" element={<AddProduct/>}> </Route>


    </Routes>
  );
};

export default Allroutes;
