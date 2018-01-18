import React from 'react';


import classes from './Souvlaki.css'
import SouvlakiIngredient from './SouvlakiIngredient/SouvlakiIngredient';

const souvlaki = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingrKey => {
      return [...Array(props.ingredients[ingrKey])].map((_, index) => {
        return <SouvlakiIngredient key = {ingrKey + 1} type = {ingrKey} />
      });
    });
  return (
    <div className = {classes.Souvlaki}>
      <SouvlakiIngredient type="bread-top" />
        {transformedIngredients}
      <SouvlakiIngredient type="bread-bottom" />
    </div>
  );
}

export default souvlaki;
