import React from 'react';
import './App.css';



const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className="list">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt='Recipe'></img>
        </div>
    );
};

export default Recipe;