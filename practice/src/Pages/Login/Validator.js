import React from "react"
export const emailValidator=email=>{
    if(!email){
        return "Email is required"
    }
    else if(!(new RegExp('^[a-zA-Z0-9._%+-]+@gmail\\.com$')).test(email)){
        return "Incorect Email format"
    }
    return "";
}

export const passwordValidator=password=>{
    if(!password){
        return "Password is required"
    }
    else if(password.length<6){
        return "Password should be Minimum of 6 Character"
    }
    return "";
}