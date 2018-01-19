import React, { Component } from 'react';

import Aux from '../../hoc/aux';
import Souvlaki from '../../components/Souvlaki/Souvlaki';
import BuildControls from '../../components/Souvlaki/BuildControls/BuildControls'

class SouvlakiBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render () {
    return (
      <Aux>
        <Souvlaki ingredients = {this.state.ingredients} />
        <BuildControls/>
      </Aux>
    );
  }
}

export default SouvlakiBuilder;
