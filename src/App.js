import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import SouvlakiBuilder from './containers/SouvlakiBuilder/SouvlakiBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <SouvlakiBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
