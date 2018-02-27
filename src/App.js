import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout'
import SouvlakiBuilder from './containers/SouvlakiBuilder/SouvlakiBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

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
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={SouvlakiBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
