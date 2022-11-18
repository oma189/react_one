import { Link } from "react-router-dom";

import "./topbar.css";


export default function TopBar() {
    const user = false;
    return (

        <div className="top navigation">
            <div className="topLeft">
                {/* <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i> */}
                <h2>Oma_ <small>skin care</small> </h2>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/' className="link">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/' className="link">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/write' className="link">Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && 'LogOut'}
                        {/* <Link to='/' className="link">LogOut</Link> */}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"
                            src="https://pbs.twimg.com/profile_images/1536363894876393473/gNu6ekq3_400x400.jpg" alt="" srcset="" />
                    ) : 
                    <ul className="topList">
                        <li className="topListItem">
                        <Link to='/login' className="link">Login</Link>
                        </li>
                        <li className="topListItem">
                        <Link to='/register' className="link">Register</Link>
                        </li>
                  
                    </ul>
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>

    )

}