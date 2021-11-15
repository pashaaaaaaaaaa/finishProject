import React from "react";
import './icon.css'
import Add from "./Addfood"
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { GiCampCookingPot,GiFishCooked } from 'react-icons/gi'
import { AiFillCalculator } from 'react-icons/ai'
import { useState } from "react";


export default function Icon(){
    // const[add, setAdd]=useState(false)
    const[openPlashka, setOpenPlashka] = useState(false)
    // const addFood=()=>{
    //     setAdd(!add)
    // }
    return(
        <div className="saedbar">
            <div className="icon-box">
                    <div className="side-text">
                    Favorite Outlet
                    </div>
                    <div className="icon">
                        <AiFillCalculator className="fa"/>
                    </div>
                </div>
            <div className="icon-box" onClick={() => setOpenPlashka(!openPlashka)} >
                <div className="side-text" >
                    Additional recept
                </div>
                <div className="icon">
                    <BsFillPlusCircleFill className="fa"/>
                    </div>
             </div>
             { openPlashka && <Add/>}

            <div className="icon-box">
                <div className="side-text">
                Onlaine Delivery
                </div>
                <div className="icon">
                    <GiCampCookingPot className="fa"/>
                </div>
                </div>
            <div className="icon-box">
                    <div className="side-text">
                    Earn Rewards
                    </div>
                    <div className="icon">
                        <GiFishCooked className="fa"/>
                    </div>
                </div>
        </div>
    
    )
}
