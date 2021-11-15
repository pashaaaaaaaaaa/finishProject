import React from "react"
import './quous.css'

export default function Quous(){
    return(
        <div className="cont">
            <h1></h1>
                <div className="col">
                    <h2>Gordon James Ramzey</h2>
                    <div className="caption">
                    <p>A professional in his field, this Scottish chef is the most famous in the culinary industry. Has it not always been said that a devoted disciple is worth hundreds of teachers? His eternal desire was to become a football player, but the fate of the culinary wizard decreed otherwise: after a football injury, he resorted to cooking and became a chef. The only chef in the UK to receive 10 Michelin stars (now 14), this man maintains harmony in his dishes.</p>
                    <button type="button">Know More</button>
                    </div>
            <img src="imges/bigheader/gordon.jpg" className="dance"/>
                </div>
                <div className="col">
                    <h2>Marco Pirr White</h2>
                    <div className="caption">
                        <p>The British renowned chef made his way to fame and became the Godfather of modern cooking, contributing greatly to the development of modern international cuisine. White was also the first young chef to receive 3 Michelin stars at the age of 33. Do you know what sets him apart from others? He believed that sharing knowledge was a way of earning money, so he taught Gordon Ramsay and Curtis Stone, who praised his temperament. If only his dishes were more accessible</p>
                    <button type="button">Know More</button>
                    </div>
                    <img src="imges/bigheader/pirr.jpg" className="kach"/>
                </div>
                <div className="col">
                    <h2>Paul Bocuse</h2>
                    <div className="caption">
                        <p>If you find yourself in France, eat like a Frenchman and you will never feel like eating differently again. And if you got the chance to eat a dish prepared by the Father of the Culinary Arts - Paul Bocuse, you probably won't eat what other French people have just to keep the taste of the delicacies from the legend. He was one of the most popular chefs whose name is associated with the new French cuisine. He was not only the king of cooking, but also the creator of other kings: he taught students </p>
                    <button type="button">Know More</button>
                    </div>
                    <img src="imges/bigheader/charli.jpg" alt=""/>
                </div>
            </div>
    )
}