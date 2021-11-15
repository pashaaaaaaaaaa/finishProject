import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
import './Slayd.css'

export default function Slide(){
    return(
        <div className="slayd-container">
        <Splide
            options={{
                autoplay:true,
                arrows: false,
                pagination: false,
                type: "loop",
                perPage: 3,
                perMove:1,
                rewindSpeed: 0.2,
            }}
            >
                <SplideSlide className="right">
                    <img src="imges/show/one.jpg" className="imgSlayd"/>
                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/two.jpg" className="imgSlayd"/>
                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/three.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/four.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/five.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/six.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/seven.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/eight.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/nine.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/ten.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/eleven.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/twelf.jpg" className="imgSlayd"/>

                </SplideSlide>
                <SplideSlide className="right">
                <img src="imges/show/13.jpg" className="imgSlayd"/>

                </SplideSlide>
            </Splide>
            </div>
    )
}