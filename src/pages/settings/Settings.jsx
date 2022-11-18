import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings(){
    return(
        <div className="settings">
       <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form  className="settingsForm">
            <label>profile picture</label>
            <div className="settingsPP">
                <img src="https://pbs.twimg.com/profile_images/1536363894876393473/gNu6ekq3_400x400.jpg" alt="" srcset="" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" name="" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text"  placeholder="oma"/>
            <label>Email</label>
            <input type="text"  placeholder="gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
       </div>
       <Sidebar/>
        </div>
    )
}