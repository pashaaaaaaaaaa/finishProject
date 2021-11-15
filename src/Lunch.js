import React from "react";
import { GiCook } from "react-icons/gi";
import { FaCookieBite } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaHome, FaComments } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsFillPlusCircleFill, BsFillBookmarkHeartFill } from 'react-icons/bs'

export default function Lunch(props){
    return(
        <section className="break-cont">
        <div className="saedbar">
                    <div className="icon-box" onClick={props.goHome}>
                            <div className="side-text">
                            Home
                            </div>
                            <div className="icon">
                                <FaHome className="fa"/>
                            </div>
                    </div>
                    <div className="icon-box"  >
                        <div className="side-text" >
                            Additional recept
                        </div>
                        <div className="icon">
                            <BsFillPlusCircleFill className="fa"/>
                            </div>
                    </div>
                </div>
       
            <div className="one-food">
                <div className="wrIc">
                <img src="imges/launch/foodOne.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Poached Salmon in Coconut Lime Sauce</h4>
                    <div className="wrapper-recept">
                        <p className="text">Poached Salmon made exotic with a simple, amazing<br/> Coconut Lime Sauce!! Tastes like a Thai coconut curry sauce – but it’s quick and easy. <br/>The trick is to caramelise garlic, ginger and lemongrass with a smidge of suga<br/>r before adding the coconut milk. It’s incredible what a difference it makes!</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>200,97 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>14,06 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>8,35 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>14,56 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 25 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                        <BsStar/>
                        <BsStar/>
                     </div>
                </div>
            </div>
            <div className="one-food">
                <div className="wrIc">
                <img src="imges/launch/foodtwo.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Name Food</h4>
                    <div className="wrapper-recept">
                        <p className="text">Сырники или творожники — прекрасное блюдо для завтрака. <br/>Приготовить вкусные и нежные сырники довольно просто.<br/> И времени на это требуется совсем немного. <br/>Это блюдо можно готовить с мукой и без, с разными фруктовыми и овощными добавками. <br/>Как приготовить домашние сырники из творога пошагово — в этом рецепте.</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>200,97 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>14,06 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>8,35 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>14,56 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 25 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                        <BsStar/>
                        <BsStar/>
                     </div>
                </div>
            </div>
            <div className="one-food">
                <div className="wrIc">
                <img src="imges/launch/threefood.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Name Food</h4>
                    <div className="wrapper-recept">
                        <p className="text">Сырники или творожники — прекрасное блюдо для завтрака. <br/>Приготовить вкусные и нежные сырники довольно просто.<br/> И времени на это требуется совсем немного. <br/>Это блюдо можно готовить с мукой и без, с разными фруктовыми и овощными добавками. <br/>Как приготовить домашние сырники из творога пошагово — в этом рецепте.</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>200,97 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>14,06 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>8,35 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>14,56 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 25 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                        <BsStar/>
                        <BsStar/>
                     </div>
                </div>
            </div>
            <div className="one-food">
                <div className="wrIc">
                <img src="imges/launch/fourfood.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Name Food </h4>
                    <div className="wrapper-recept">
                        <p className="text">Сырники или творожники — прекрасное блюдо для завтрака. <br/>Приготовить вкусные и нежные сырники довольно просто.<br/> И времени на это требуется совсем немного. <br/>Это блюдо можно готовить с мукой и без, с разными фруктовыми и овощными добавками. <br/>Как приготовить домашние сырники из творога пошагово — в этом рецепте.</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>200,97 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>14,06 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>8,35 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>14,56 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 25 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                        <BsStar/>
                        <BsStar/>
                     </div>
                </div>
            </div>
        </section>
    )
}