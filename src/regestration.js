import React from "react";
import  "./regestration.css"

export default function Regestration (){

    
    const register=()=>{
        const x =document.querySelector("#login");
        const y =document.querySelector("#register");
        const z =document.querySelector("#btn");
        x.style.left="-400px";
        y.style.left="50px";
        z.style.left="110px";
    }
    const login=()=>{
        const x =document.querySelector("#login");
        const y =document.querySelector("#register");
        const z =document.querySelector("#btn");
        x.style.left="50px";
        y.style.left="450px";
        z.style.left="0";
    }

    return(
    <div className="hero">
        <div className="frombox">
            <div className="buttonbox">
                <div id="btn"></div>
                <button type="button" className="togglebtn"  onClick={login}>Login</button>
                <button type="button" className="togglebtn" onClick={register}>Register</button>
            </div>
            <div className="sicial-icons">
                <img src="imges/instagram.png" alt="logo"/>
                <img src="imges/pointer.png" alt="logo"/>
                <img src="imges/twitter.png" alt="logo"/>
            </div>
            <form id="login" className="ingroup">
                <input type="text" className="infield" placeholder="User Id" required/>
                <input type="text" className="infield" placeholder="Enter Password" required/>
                <input type="checkbox" className="chechbox"/><span>Remember Password</span>
                <button type="submit" className="submitbtn">Login</button>
            </form>
            <form id="register" className="ingroup">
                <input type="text" className="infield" placeholder="User Id" required/>
                <input type="email" className="infield" placeholder="Email Id" required/>
                <input type="text" className="infield" placeholder="Enter Password" required/>
                <input type="checkbox" className="chechbox"/><span>I agree to the terms & conditions</span>
                <button type="submit" className="submitbtn">Register</button>
            </form>
        </div>
     </div>
    )
}