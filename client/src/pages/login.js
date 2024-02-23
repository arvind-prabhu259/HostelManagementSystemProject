import React, { useState } from "react";

const Login = ()=>{
    const [message, setMessage] = useState("");
    const [studEmail, setStudEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        let authData = {
            email: studEmail,
            pw: password
        };
        // console.log(authData);
        fetch("/login",{
            method: 'post',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(authData)
        }).then(
            response=>response.json()
        ).then(data=>{
            setMessage(data)
        })
        console.log(message.status);
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Login page</h1>
                <input type="email" placeholder="Email address" required onChange={(e)=>{setStudEmail(e.target.value)}}/><br/>
                <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <label><input type="checkbox"/>Remember</label>
                <button type="submit">Login</button>
                <p>{message.status}</p>
            </form>
        </div>
    )
};
export default Login;