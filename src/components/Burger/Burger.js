import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) =>{
        /* Create <BurgerIngredients/> component */
        return [...Array(props.ingredients[ingredientKey])].map((_, index)=>{ /* [ , , ] if return 3 */
            return <BurgerIngredients key={ ingredientKey + index } type={ ingredientKey }/>
        }); 
    })
    /* reduce the array with only ingredients */
    .reduce((arr, element) => {
        return arr.concat(element)
    },  []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding the Ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'/>
                { transformedIngredients }
            <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}

export default burger;
