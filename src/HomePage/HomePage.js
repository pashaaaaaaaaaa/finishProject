import React from "react";
import Header from '../Header';
import Main from '../main'; 
import History from '../history'; 
import Footer from '../footer'; 
import Author from '../Author'; 
import Icons from '../Icons'; 
import Quous from "../Quous";
import Slide from "../Slide";


export default function HomePage(props){
    return(
        <div className="home-container">
                    <Header searchAction={props.searchAction}/>
                    <Icons/>
                     <Main clickBreakfast={props.clickBreakfast}
                     clickLunch={props.clickLunch}
                     clickDessert={props.clickDessert}/>
                    <History/>
                    <Quous/>
                    <Slide className="sl-wr"/>
                    <Author/>
                    <Footer/>
        </div>
    )
}