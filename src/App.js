import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import SouvlakiBuilder from './containers/SouvlakiBuilder/SouvlakiBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  // state = {
  //   show: true
  // };
  //
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({show: false})
  //   }, 5000);
  // };

  render() {
    return (
      <div className="App">
        <Layout>
          <SouvlakiBuilder/>
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
