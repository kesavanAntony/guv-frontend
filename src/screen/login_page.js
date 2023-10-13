import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

const LoginScreen = ()=>{

    const [login,updateLogin] =useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
     const captureInput =(event)=>{
          updateLogin({...login,[event.target.name]:event.target.value})
     }
     const loginCheck =()=>{
        console.log(login)
        const url ="http://localhost:4000/login";
        axios.post(url,login)
        .then((response)=>{
          navigate("/additional")
        })
        .catch((error)=>{
          console.log(error)  
        })
     }
    
    return(
        <div>
            <div className="overall-container">
            <h1 className="title">LoginUp page</h1>
            <div>
            {/* <form action=""> */}
             <div>
             <label className="label">Email</label>
             <input type="text" placeholder="enter your email Id" name="email" className="signup-input" onChange={captureInput}/>
             </div>
             <div>
             <label className="label">Password</label>
             <input type="password" placeholder="enter your password" name="password" className="signup-input" onChange={captureInput}/>
             </div>
             <div>
                <button onClick={()=>loginCheck()} className="login-button">Login</button>
             </div>
             <div>
                <p className="link-container">Go to signup page <NavLink to="/" className="link">click here</NavLink></p>
             </div>

             {/* </form> */}
        </div>
        </div>
        </div>
    )
}
export default LoginScreen;