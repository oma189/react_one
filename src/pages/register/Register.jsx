import "./register.css"
import React from 'react'
import { Link } from "react-router-dom"

export default function Register() {

    const handleRegister = (e) => {
        //prevent reload
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        fetch("http://localhost:5000/register", {
            method : "post",
            mode : "cors",
            body : formData
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleRegister}>
                <label>Username</label>
                <input name="uname" type="text" className="registerInput" placeholder="Enter your Username" />
                <label>Email</label>
                <input name="email" type="text" className="registerInput" placeholder="Enter your email" />
                <label >Password</label>
                <input name="pass" type="password" className="registerInput" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link></button>
        </div>
    )
}