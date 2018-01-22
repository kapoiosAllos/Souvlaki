import React from 'react';

import souvlakiLogo from '../../assets/images/Recipe-Souvlaki.png';
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={souvlakiLogo} alt="My Souvlaki"/>
  </div>
);

export default logo;
