import React,{useState} from 'react';
import html from "react-inner-html"
import { FaHome } from 'react-icons/fa';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { GiCook, GiCampCookingPot, GiFishCooked, GiRiceCooker } from 'react-icons/gi'

import "./results.css"


export default  function ResultsPage(props){
    const [resept, setResept] = useState(null)

    const closeDetails=()=>{
        setResept(null)
    }

    const getRecept=(id, propName)=>{
            // fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f9d550c6d3fe4e1a90557f7e52a75b77`)
            //     .then(res =>res.json())
            //     .then(data =>{
            //         console.log(data)
            //         setResept({
            //             id: id,
            //             [propName]: data[propName]
                        
            //         })
            //     })
            //     .catch(err =>console.log(err))
    }
    const clickHome =()=>{
        props.goHome()
    }
  
    
    return(
        <section className="res-container">
                <div className="saedbar">
                    <div className="icon-box" onClick={clickHome}>
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

                <div className="header">
                    <h2 className="header-title">"{props.resultsTitle}"</h2>
                </div>
            {
               props.data.map((element)=>{
                 return   <div className="resept" key={element.title}>
                                    <div className="wrapper-res">         
                                        <div className="img">    
                                            <img src={element.image}/>
                                        </div>    
                                        <div className="res-wr">
                                            <p className="title">
                                                {element.title}
                                            </p>
                                            <div className="ic">
                                                <GiRiceCooker/>
                                                <GiFishCooked/>
                                                <GiCampCookingPot/>
                                                <GiCook/>
                                            </div>
                                            <div className="btn-wr">
                                                <button className="btn" onClick={()=>getRecept(element.id, "summary")}>calories</button>
                                                <button className="btn" onClick={()=>getRecept(element.id, "instructions")}>description</button>
                                                <button  className="btn" onClick={()=>getRecept(element.id, "extendedIngredients")}>reсept</button>
                                            </div>
                                        </div>
                                 </div>   
                                    {
                                        resept && resept.id === element.id && 
                                        <div className="recept-wr">
                                            <button onClick={closeDetails} className="exit-btn"><BsFillArrowUpRightSquareFill/></button>
                                                {resept.summary && <p className="resept-summary" {...html(resept.summary)} />}
                                                {resept.instructions &&  <p className="resept-ins" {...html(resept.instructions)} />}
                                                {resept.extendedIngredients &&   <ol className="ingredient">{resept.extendedIngredients.map((item)=>{
                                                    return <li>
                                                                        { `${item.aisle} ${item.original}`}
                                                                </li>
                                                    })}
                                                    </ol>}
                                        </div>
                                    }
                                </div>
                })
            }
        </section>
    )
}
