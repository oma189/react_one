import "./write.css"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Write() {
    const navigate = useNavigate()
    const [token] = useState(localStorage.getItem('token') || null);

    useEffect( () => {
        if(!token){
            navigate('/login')
        }
    }, [token])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            {
                (token) &&
                <>
                    <div className="write">
                        <img className="writeImg"
                            src="https://media.istockphoto.com/id/1271217937/photo/afro-girl-in-cozy-fashionable-sweater.jpg?s=612x612&w=0&k=20&c=ZzceG0ow_bjkvu6y-QI9APymXIbUcnlfZqfRVaj62_U=" alt="" srcset="" />
                        <form action="" className="writeForm">
                            <div className="writeFormGroup">
                                <label htmlFor="fileInput">
                                    <i className="writeIcon fas fa-plus"></i>
                                </label>
                                <input type="file" name="" id="fileInput" style={{ display: "none" }} />
                                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                            </div>
                            <div className="writeFormGroup">
                                <textarea placeholder="Tell your skin story" typeof="text" className="writeInput writeText" >
        
                                </textarea>
                            </div>
                            <button className="writeSubmit">Publish</button>
                        </form>
                    </div>
                </>
            }
        </>
        
    )
}