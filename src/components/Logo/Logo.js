import React from 'react';

import souvlakiLogo from '../../assets/images/Recipe-Souvlaki.png';
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo} style= {{height: props.height}}>
    <img src={souvlakiLogo} alt="My Souvlaki"/>
  </div>
);

export default logo;
