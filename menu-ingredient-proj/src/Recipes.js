import React from 'react'
import style from './react.module.css'


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                <h2 style={{'textAlign': 'center'}}>Ingredients</h2>
                {ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient.text}</li>
                })}
            </ol>
            <h2 style={{'textAlign': 'center'}}>Calories:  <span style={{fontWeight: 'bold'}}>{parseFloat(calories).toFixed(2)}</span></h2>
            <h2 style={{'textAlign': 'center'}}>Picture</h2>
            <img className={style.image} src={image} alt=''/>
        </div>
    )
}

export default Recipe