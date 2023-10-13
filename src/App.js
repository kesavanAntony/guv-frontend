import React from "react";
import "./App.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginScreen from "./screen/login_page";
import SignUpScreen from "./screen/signup_page";
import AdditionalInfo from "./screen/additional_info";
const App= ()=> {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
    <Route path="" element={<SignUpScreen></SignUpScreen>}></Route>
    <Route path="additional" element={<AdditionalInfo></AdditionalInfo>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
