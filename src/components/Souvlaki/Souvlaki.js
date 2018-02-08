import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Souvlaki.css'
import SouvlakiIngredient from './SouvlakiIngredient/SouvlakiIngredient';

const souvlaki = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingrKey => {
      return [...Array(props.ingredients[ingrKey])].map((_, index) => {
        return <SouvlakiIngredient key = {ingrKey + index} type = {ingrKey} />
      });
    })
    .reduce((previous, next) => {
      return previous.concat(next)
    }, []);
    if (transformedIngredients.length === 0){
      transformedIngredients = <p> Please start adding ingredients!</p>;
    }
  return (
    <div className = {classes.Souvlaki}>
      <SouvlakiIngredient type="bread-top" />
        {transformedIngredients}
      <SouvlakiIngredient type="bread-bottom" />
    </div>
  );
}

export default withRouter(souvlaki);
