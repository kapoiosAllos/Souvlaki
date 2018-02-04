import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'
import SouvlakiBuilder from './containers/SouvlakiBuilder/SouvlakiBuilder';

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
          {this.state.show ? <SouvlakiBuilder/> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
