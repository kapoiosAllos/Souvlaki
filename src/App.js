import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
          <Route path="/" exact component={SouvlakiBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}

export default App;
