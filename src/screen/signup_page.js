import React,{useState} from "react";
import validation from "./validation";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
const SignUpScreen = ()=>{
 
    const [value,updateValue]=useState({
        name:"",
        email:"",
        password:"",
        confirm_password:""
    })
    const navigate =useNavigate()
    
    const [error,updateError] =useState({})

    const onHandleInput = (event) =>{
        updateValue({...value,[event.target.name]:event.target.value})
    }
    const handleVaditation = ()=>{
       updateError(validation(value));
       console.log(value)
    //    if(error.name===""&&error.email===""&&error.password===""&&error.confirm_password===""){
       
       const url="http://localhost:4000/signup";
       axios.post(url,value)
       .then((response)=>{
        const data=response.data
         navigate("/login")
         alert(data.message)
        
         })
       .catch((error)=>{
         alert(error)   
       })
    // }
    }
    
    
  

    return(
        <div>
            <div className="overall-container">
            <h1 className="title">SignUp page</h1>
            <div>
            {/* <form action="" onSubmit={handleVaditation}> */}
            <div>
            <label className="label">Name</label>
             <input type="text" placeholder="enter your name" name="name" className="signup-input"onChange={onHandleInput}/>
             {error.name && <p className="error-color">{error.name}</p>}
             </div>
             <div>
             <label className="label">Email</label>
             <input type="text" placeholder="enter your email Id" name="email" className="signup-input" onChange={onHandleInput}/>
             {error.email && <p className="error-color">{error.email}</p>}
             </div>
             <div>
             <label className="label">Password</label>
             <input type="password" placeholder="enter your password" name="password" className="signup-input" onChange={onHandleInput}/>
             {error.password && <p className="error-color">{error.password}</p>}
             </div>
             <div>
             <label className="label">Confirm Password</label>
             <input type="password" placeholder="enter your Name" name="confirm_password" className="signup-input" onChange={onHandleInput}/>
             {error.confirm_password && <p className="error-color">{error.confirm_password}</p>}
             </div>
             <div className="signup-container">
                <button onClick={()=>handleVaditation()} className="signup-button">SignUp</button>
             </div>
             <div>
                <p className="link-container">Already you have an account <NavLink to="/login" className="link">Login Here</NavLink></p>
             </div>
             {/* </form> */}
            </div>
        
            </div>
        </div>
    )
}
export default SignUpScreen;