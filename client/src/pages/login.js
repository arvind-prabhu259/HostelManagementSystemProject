import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = ()=>{
    const [message, setMessage] = useState("");
    const [studEmail, setStudEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // asynchronous function to make request to api for user auth
    const fetchData = (authData) => {
        return new Promise((resolve, reject) => {
            fetch("/login",{
                method: 'post',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(authData)
            })
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error("Timeout");
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let authData = {
            email: studEmail,
            pw: password
        };
        // console.log(authData);

        // fetch("/login",{
        //     method: 'post',
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify(authData)
        // }).then(
        //     response=>response.json()
        // ).then(data=>{
        //     setMessage(data)
        // });
        
        fetchData(authData)
        .then(data => {
            setMessage(data);
            if(data.status === "Logged in successfully"){
                setIsLoggedIn(true);
            }
        })
        .catch(error => {
            console.log("Error2:", error);
        })
        
    }

    return (
        <>
            <div className="loginDiv">
                {isLoggedIn?(
                    <Navigate to="/home" />
                ):(
                    <form onSubmit = {handleSubmit}>
                        <h1>Login page</h1>
                        <input type="email" placeholder="Email address" required onChange={(e)=>{setStudEmail(e.target.value)}}/><br/>
                        <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                        <label><input type="checkbox"/>Remember</label>
                        <button type="submit">Login</button>
                        <p>{message.status}</p>
                    </form>
                )}
            </div>
        </>
    )
};
export default Login;