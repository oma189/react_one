import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {

    const handleLogin = (e) => {
        //prevent reload
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        fetch("http://localhost:5000/login", {
            method: "post",
            mode: "cors",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                //save token
                localStorage.setItem('token', data?.data)
                alert(data.message)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleLogin}>
                <label>Email</label>
                <input name="email" type="text" className="loginInput" placeholder="Enter your email" />
                <label >Password</label>
                <input type="password" className="loginInput" name="pass" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register"> Register</Link></button>
        </div>
    )
}