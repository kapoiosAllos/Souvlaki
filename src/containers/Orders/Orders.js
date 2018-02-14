import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading:true
  }

  componentDidMount () {
    axios.get('/orders.json')
      .then(res => {
        const fetcedOrders = [];
        for (let key in res.data) {
          fetcedOrders.push({
            ...res.data[key],
            id: key
          });
          console.log(fetcedOrders);
        };
        this.setState({loading: false});
      })
      .catch(err => {
        this.setState({loading: false});
      });
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
