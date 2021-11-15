import React from "react";
import './bigheader.css'

export default function Bigheader(){
    return(
        <div className="big-cont">
         <div className="banner1">
        <img src="imges/bigheader/four.jpg" alt=""/>
      <div className="text-box text-box1">
        <h1 data-neon="">
            #WELCOME  TO THE GOURMENT CLUB</h1>
          {/* <span></span> */}
          {/* <p>Путешествия делают нас счастоивыми <strong>больше, чем деги</strong></p> */}
      </div>
    </div>
    <div className="banner2">
    <img src="imges/bigheader/three.jpg" alt=""/>
        
      <div className="text-box text-box2">
          <h1 data-neon="">#There are only three things women need in life: food, water, and compliments.” </h1>
          {/* <span></span> */}
          {/* <p>makes one modest. You see what a tiny place ypu occupy in the world . G.Flaubert</p> */}
      </div>
    </div>
    <div className="banner3">
    <img src="imges/bigheader/seven.jpeg" alt=""/>
        
      <div className="text-box text-box3">
          <h1 data-neon="">#“Food is the most primitive form of comfort.” – Sheila Graham</h1>
          {/* <span></span> */}
          {/* <p>Reward for working , its education for living .</p> */}
      </div>
    </div>
    <div className="banner4">
    <img src="imges/bigheader/two.jpg" alt=""/>
        
      <div className="text-box text-box4">
          <h1 data-neon="">#There is no love sincerer than the love of food.”</h1>
          {/* <span></span> */}
          {/* <p>не октрывает глаза на мио и не расширает кругозор , как <strong>Путешествия</strong></p> */}
      </div>
    </div>
        </div>
    )
}