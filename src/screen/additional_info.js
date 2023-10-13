import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const AdditionalInfo = ()=>{
const [otherDetail,updateOtherDetail]=useState({
    age:"",
    gender:"",
    date:"",
    phoneNumber:"",
    address:""

})
const navigate=useNavigate();
const goToLoginPage =()=>{
    navigate("/login")
}
const[formError,updateFormError]=useState({
    age:false,
    gender:false,
    date:false,
    phoneNumber:false,
    address:false
})

const captureValue = (event) =>{
        updateOtherDetail({...otherDetail,[event.target.name]:event.target.value})
}
const userInfo =()=>{
    console.log(otherDetail)
    updateFormError({
        ...formError,
        age:otherDetail.age ==="" ? true : false,
        gender:otherDetail.gender==="" ? true : false,
        date:otherDetail.date==="" ? true : false,
        phoneNumber:otherDetail.phoneNumber==="" ? true : false,
        address:otherDetail.address==="" ? true : false
        
    })

}
    return(
        <div>
            <div className="overall-additional-container">
            <h1 className="title">Profile Page</h1>
            <div>
                <lable className="label">Age</lable>
                <input type="text" name="age" onChange={captureValue} className="signup-input" placeholder="enter your age"/>
                {formError.age && <p className="error-color">enter your name</p> }
            </div>
             <div>
                <lable className="label">Gender</lable>
                <input type="radio" name="gender" onChange={captureValue}/>Male
                <input type="radio" name="gender" onChange={captureValue}/>Female
                <input type="radio" name="gender" onChange={captureValue}/>NA
                {formError.gender && <p className="error-color">select your gender</p> }
             </div>
             <div>
                <lable className="label">Date of Birth</lable>
                <input type="date" name="date" onChange={captureValue}/>
                {formError.date && <p className="error-color">select your date</p> }
            </div>
            <div>
            <lable className="label">Phone Number</lable>
                <input type="text" placeholder="enter your mobile number" className="signup-input" maxLength="10" name="phoneNumber" onChange={captureValue}/>
                {formError.phoneNumber && <p className="error-color">enter your number</p> }
            </div>
            <div>
            <lable className="label">Address</lable>
                <input type="text" placeholder="enter your address" className="signup-input" name="address" onChange={captureValue}/>
                {formError.address && <p className="error-color">enter your address</p> }
            </div>
            <div className="signup-container">
            <button className="signup-button" onClick={()=>userInfo()}>Submit</button>
            </div>
            <div className="signup-container">
                <button className="signup-button" onClick={()=>goToLoginPage()}>Log out</button>
             </div>

        </div>
        </div>

    )
}
export default AdditionalInfo;
