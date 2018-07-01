import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];
const buildControls = (props) => {
    return (
        <div  className={classes.BuildControls}>
            {
                controls.map((control,index)=>{
                    return <BuildControl 
                        key={control.label} 
                        label={control.label}
                        type={control.type}
                        added={props.ingredientAdded}
                        removed={props.ingredientRemoved}
                        disabled={props.disabled[control.type]}/>
                })
            }
        </div>    
    );
}
export default buildControls;
