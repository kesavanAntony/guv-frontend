
function validation(value){
   let error ={}
   const email_pattern =/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
//    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*\[A-Z])[a-zA-Z0-9]{8,}$/

if(value.name ===""){
    error.name ="please enter your name"
}
else{
    error.name=""
}

if(value.email===""){
    error.email="enter your emailId"
}
 else if(!email_pattern.test(value.email)){
    error.email="enter valid emailid"
}
else{
    error.name=""
}
if(value.password===""){
    error.password="enter your password"
}
else if(value.confirm_password<= String(8) ){
    error.password="Must be 8 charecter"
}
else{
    error.password=""
}

if(value.confirm_password==="" || value.confirm_password !== value.password){
    error.confirm_password="enter the correct password"
}
else{
    error.confirm_password=""
}

return error
}
export default validation;