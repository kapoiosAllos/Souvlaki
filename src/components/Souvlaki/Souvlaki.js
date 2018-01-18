import React from 'react';


import classes from './Souvlaki.css'
import SouvlakiIngredient from './SouvlakiIngredient/SouvlakiIngredient';

const souvlaki = (props) => {
  return (
    <div className = {classes.Souvlaki}>
      <SouvlakiIngredient type="bread-top" />
      <SouvlakiIngredient type="cheese" />
      <SouvlakiIngredient type="meat" />
      <SouvlakiIngredient type="bread-bottom" />
    </div>
  );
}

export default souvlaki;
