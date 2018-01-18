import React, { Component } from 'react';

import Aux from '../../hoc/aux';
import Souvlaki from '../../components/Souvlaki/Souvlaki';

class SouvlakiBuilder extends Component {
  render () {
    return (
      <Aux>
        <Souvlaki />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default SouvlakiBuilder;
