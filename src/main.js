import React, { useState } from "react";
import "./main.css"
import { AiFillPropertySafety } from "react-icons/ai";
import { IoRestaurantOutline } from "react-icons/io5";


export default function Main(props){
   
    const clickBreakfastBtn=()=>{
        props.clickBreakfast()
    }
    const clickLunchBtn=()=>{
        props.clickLunch()
        console.log("1")
    }
    const clickDessertBtn=()=>{
        props.clickDessert()
        console.log("2")
    }
    

    return(
        <div className="mainContainer">
           
            <div className="mainWr">
                <section className="oneblock">
                <div className="a" onClick={clickBreakfastBtn}>
                    <img  src="imges/breakfast/three.jpg" alt="breakfast"/>
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <IoRestaurantOutline/>
                             <h3>#BREAKFAST</h3>
                        <hr></hr>
                    </div>
                </div>

                    <div className="wrb">
                                <div className="b"  onClick={clickLunchBtn}>
                                    <img src="imges/lanch/lanch.jpg" alt="launch"/>    
                                    <div className="overlayb"></div>
                                    <div className="service-descb">
                                      <IoRestaurantOutline/>
                                    <h3>#LUNCH</h3>
                                    <hr></hr>
                                   </div>
                                </div>

                                <div className="b1" onClick={clickDessertBtn}>
                                    <img src="imges/lanch/afSnack.jpg" alt="launch"/>    
                                    <div className="overlayb1"></div>
                                    <div className="service-descb1">
                                    <IoRestaurantOutline/>
                                    <h3>#AFTERNOON SNACK</h3>
                                    <hr></hr>
                                     </div>
                                </div>
                    </div>
                    <div className="c">
                      <img  src="imges/dinner/oneDinner.jpg" alt="breakfast"/>
                        <div className="overlay"></div>
                            <div className="service-desc">
                            <IoRestaurantOutline/>
                            <h3>#DINNER</h3>
                            <hr></hr>
                        </div>
                    </div>
                </section>

                            {/* <h3>FastFood</h3> */}

                <section className="twoblock">
                    <div className="b">
                      <img  src="imges/fsfood/hotdog.jpg" alt="breakfast"/>
                        <div className="overlay"></div>
                            <div className="service-desc">
                            <IoRestaurantOutline/>

                            <h3>#MIX-FOOD</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="a">
                        <div className="overlay"></div>
                           <img  src="imges/fsfood/burger1.jpg" alt="breakfast"/>
                            <div className="service-desc">
                            <IoRestaurantOutline/>

                            <h3>#BURGERS</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="c">
                        <div className="overlay"></div>
                        <img  src="imges/fsfood/pizza.jpg" alt="breakfast"/>
                            <div className="service-desc">
                            <IoRestaurantOutline/>

                            <h3>#PIZZA</h3>
                            <hr></hr>
                        </div>
                    </div>
                </section>
                {/* <h3>Asia Foods</h3> */}
                <section className="threeblock">
                    <div className="a">
                        <div className="overlay"></div>
                        <img  src="imges/fsfood/thai.jpg" alt="breakfast"/>
                            <div className="service-desc">
                            <IoRestaurantOutline/>
                            <h3>#HOT-SOUPS</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="b">
                        <div className="overlay"></div>
                        <img  src="imges/fsfood/japan.jpg" alt="breakfast"/>
                            <div className="service-desc">
                            <IoRestaurantOutline/>
                            <h3>#JAPANFOODS</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="c">
                        <div className="overlay"></div>
                        <img  src="imges/fsfood/wok.jpg" alt="breakfast"/>
                            <div className="service-desc">
                            <IoRestaurantOutline/>
                            <h3>#WOK</h3>
                            <hr></hr>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}