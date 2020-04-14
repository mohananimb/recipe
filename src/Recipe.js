import React, { Component } from 'react';
import style from "./recipe.module.css"

const Recipe = ({title,calorie, img, ingredient})=> {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <ol>
                {ingredient.map((ing,i) => (
                    <li key={i}>{ing.text}</li>
                    ))}
            </ol>
                    <p><strong>Calories: {calorie}</strong></p>
        </div>
    )
}

export default Recipe;