import React from 'react';
import {GoogleOAuthProvider, GoogleLogin, googleLogout} from "@react-oauth/google";
import { useState } from "react";
//require ('dotenv').config;

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(true);
    
    const onLoginSuccess =(res) => {
         console.log("Login Success",res);
         console.log("token", res.credential);

         setShowloginButton(false)
         setShowlogoutButton(true)

    } ;
    
    const onLoginFailure =(res) => {
       
        console.log("Login Failed",res);
   
    } ;

    const logout = () => {
        googleLogout()
        alert("Logged out successfully");
        console.clear();
        setShowloginButton(true)
        setShowlogoutButton(false)
    } ;

    return (
        <div>
           { showloginButton ?
            <GoogleOAuthProvider clientId = "941004067586-uorlbcfl9kd0ld8p9noddfjdsq830s9h.apps.googleusercontent.com">
                <GoogleLogin
                onSuccess = {onLoginSuccess}
                onError = {onLoginFailure}
                />
            </GoogleOAuthProvider>: null }

            { showlogoutButton ?
            <div>
                <h1>Login  Successfull</h1>
                <button onClick={logout}>logout</button>
                 </div> :null
             }

        </div>
    );
}

export default Login;