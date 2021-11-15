import React, { useState } from "react";
import Regestration from "./regestration"
import { AiOutlineLogin } from 'react-icons/ai'
import { MdSettingsVoice, MdOutlineManageSearch } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BsBookmarksFill, BsSearch } from 'react-icons/bs'
import Left from "./Left"
import Bigheader from "./Bigheader"
import "./header.css";

export default function Header(props){
    const [isRegVis, setisRegVis] = useState(false)
    const [ismenuVis, setisMenuVis] = useState(false)
    const clickReg = () =>{
        setisRegVis(!isRegVis)
    }
    const clickMenu = () =>{
        setisMenuVis(!ismenuVis)
        
    }
    const clickFavorit = () =>{
        console.log("2")
    }
    const clickSearch=()=>{
        props.searchAction(document.querySelector('#search-input').value)
    }
    console.log(isRegVis)
    return(
        <>
    <Bigheader/>
        <div className="container">
            <div className="wrapper">
                <div className="logo">
                    <p className="logo">#I'MCHEF</p>
                </div>

                <div className="nav-middle flex-div">
                  <div className="search-box flex-div">
                        <input type="text" placeholder="Search " id="search-input"/>
                        <button onClick={clickSearch}>
                              <MdOutlineManageSearch/>
                        </button>
                </div>
                            <MdSettingsVoice/>
                </div>
                <div className="wrUl">
                    <button onClick={clickFavorit} className="menuBtn">
                        <BsBookmarksFill/>
                    </button>
                    <button onClick={clickMenu} className="menuBtn">
                        <AiOutlineMenuUnfold/>
                        </button>
                       {ismenuVis && <Left/>}
                    <button onClick = {clickReg} className="menuBtn">
                        <AiOutlineLogin/> 
                    </button>

                </div>
            </div>
            
                {isRegVis &&  <Regestration/>}
         </div>    
        </>   
    )
} 
           