import React, { useState } from "react";
import "./breakfast.css"
import { GiCook } from "react-icons/gi";
import { FaCookieBite } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaHome, FaComments } from 'react-icons/fa';
import { MdRestaurantMenu } from "react-icons/md";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsFillPlusCircleFill, BsFillBookmarkHeartFill } from 'react-icons/bs'


export default function Breakfast(props){
    const [arr, setArr]=useState([{
            
    }])

    return(
        <>
              
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
                <img src="imges/breakfast/sirOne.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Сырники классические</h4>
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
                <img src="imges/breakfast/four.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Кремлевская каша</h4>
                    <div className="wrapper-recept">
                        <p className="text">Крупу овсяную хорошо промыть. Залить водой так, как написано на пачке,<br/> поставить на медленный огонь и томить в течение пяти часов до готовности.<br/>
                                                            2Добавить в кашу кокосовые сливки и кокосовое молоко, затем сахар и соль.<br/>
                                                            3Выложить на тарелку. Декорировать свежими ягодами и микрозеленью..</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>406 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>9 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>17 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>55 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 45 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                     </div>
                </div>
            </div>

            <div className="one-food">
                <div className="wrIc">
                <img src="imges/breakfast/a.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Кремлевская каша</h4>
                    <div className="wrapper-recept">
                        <p className="text">Крупу овсяную хорошо промыть. Залить водой так, как написано на пачке,<br/> поставить на медленный огонь и томить в течение пяти часов до готовности.<br/>
                                                            2Добавить в кашу кокосовые сливки и кокосовое молоко, затем сахар и соль.<br/>
                                                            3Выложить на тарелку. Декорировать свежими ягодами и микрозеленью..</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>406 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>9 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>17 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>55 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 45 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                     </div>
                </div>
            </div>

            <div className="one-food">
                <div className="wrIc">
                <img src="imges/breakfast/b.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Глазунья с тостером</h4>
                    <div className="wrapper-recept">
                        <p className="text">Крупу овсяную хорошо промыть. Залить водой так, как написано на пачке,<br/> поставить на медленный огонь и томить в течение пяти часов до готовности.<br/>
                                                            2Добавить в кашу кокосовые сливки и кокосовое молоко, затем сахар и соль.<br/>
                                                            3Выложить на тарелку. Декорировать свежими ягодами и микрозеленью..</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>406 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>9 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>17 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>55 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 45 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                     </div>
                </div>
            </div>

            <div className="one-food">
                <div className="wrIc">
                <img src="imges/breakfast/c.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Драники с сыром</h4>
                    <div className="wrapper-recept">
                        <p className="text">Крупу овсяную хорошо промыть. Залить водой так, как написано на пачке,<br/> поставить на медленный огонь и томить в течение пяти часов до готовности.<br/>
                                                            2Добавить в кашу кокосовые сливки и кокосовое молоко, затем сахар и соль.<br/>
                                                            3Выложить на тарелку. Декорировать свежими ягодами и микрозеленью..</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>406 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>9 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>17 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>55 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 45 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                     </div>
                </div>
            </div>

            <div className="one-food">
                <div className="wrIc">
                <img src="imges/breakfast/d.jpg" alt="food"/>
                <div className="ico">
                    <BsFillBookmarkHeartFill className="right-icon"/>
                    <FaComments className="right-icon"/>
                    <IoShareSocialSharp/>
                </div>
                </div>
                <div className="wr-food">
                    <h4><MdRestaurantMenu/> Яищница с сыром</h4>
                    <div className="wrapper-recept">
                        <p className="text">Крупу овсяную хорошо промыть. Залить водой так, как написано на пачке,<br/> поставить на медленный огонь и томить в течение пяти часов до готовности.<br/>
                                                            2Добавить в кашу кокосовые сливки и кокосовое молоко, затем сахар и соль.<br/>
                                                            3Выложить на тарелку. Декорировать свежими ягодами и микрозеленью..</p>
                        <p><strong><FaCookieBite/> Калорийность :</strong>406 ккал</p>
                        <p><strong><FaCookieBite/> Белки :</strong>9 грам</p>
                        <p><strong><FaCookieBite/> Жиры :</strong>17 грам</p>
                        <p><strong><FaCookieBite/> Углеводы :</strong>55 грам</p>
                    </div>
                    <p><GiCook/> Время приготовление : 45 мин </p>
                        <p>Уровень сложности</p>
                    <div className="rating">
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsFillStarFill/>
                        <BsStarHalf/>
                     </div>
                </div>
            </div>
        </section>
        </>
    )
}