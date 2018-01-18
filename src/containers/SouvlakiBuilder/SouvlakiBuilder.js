import React, { Component } from 'react';

import Aux from '../../hoc/aux';
import Souvlaki from '../../components/Souvlaki/Souvlaki';

class SouvlakiBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render () {
    return (
      <Aux>
        <Souvlaki ingredients = {this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default SouvlakiBuilder;
