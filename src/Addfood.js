import React, { useState } from "react";
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { MdOutlineAddPhotoAlternate, MdOutlineAddReaction } from 'react-icons/md'
import "./addfood.css"

export default function Add(){
    const [recipe, setRecipe] = useState('')
    const [aboutRecipe, setAboutRecipe] = useState('')


    const btn =  () => {

        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: recipe, description: aboutRecipe, ingridients: 'sadasdas'}),
            redirect: 'follow'
        };
    
        fetch("https://recipes-pasha.herokuapp.com/post", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));  
          }

    return(
        <div >
        <form className="recipebox">
            <h3>Мой рецепт</h3>
            
            <input type="text" name="" placeholder="НАЗВАНИЕ РЕЦЕПТА" onChange={event => setRecipe(event.target.value)}/>
            
            <input type="text" name="" placeholder="Расскажите о своем рецепте" onChange={event => setAboutRecipe(event.target.value)}/>

            <p>Порции</p>
            <input type="" className="login"  value=""/>
            <p>Время приготовление</p>
            <input type="" className="login"  value=""/>
            <hr/>
             <p>Ингредиенты</p>
             <textarea></textarea>
            <div className="addVid">
                <button><AiOutlineVideoCameraAdd/> </button>
                <button><MdOutlineAddPhotoAlternate/> </button>
                <button><MdOutlineAddReaction onClick={btn}/></button>
            </div>
            </form>
    </div>
    )
}