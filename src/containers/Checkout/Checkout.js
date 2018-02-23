import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    // state = {
    //     ingredients: null,
    //     price: 0
    // }
    //
    // componentWillMount() {
    //   const query = new URLSearchParams(this.props.location.search);
    //   const ingredients = {};
    //   let price = 0;
    //   for (let param of query.entries()) {
    //     if (param[0] === 'price') {
    //       price = param[1];
    //     }
    //     else {
    //       ingredients[param[0]] = +param[1];
    //     }
    //   }
    //   this.setState({ingredients: ingredients, totalPrice: price})
    // }

    checkoutCancelled = () => {
      this.props.history.goBack();
    }

    checkoutContinued = () => {
      this.props.history.replace('/checkout/contact-data');
    }

    render() {
      let summary = <Redirect to="/"/>
      if (this.props.ings) {
        summary = (
          <div>
            <CheckoutSummary
              ingredients={this.props.ings}
              checkoutCancelled={this.checkoutCancelled}
              checkoutContinued={this.checkoutContinued}/>
            <Route
              path={this.props.match.path + '/contact-data'}
              component={ContactData}/>
          </div>
        );
      }
      return summary;
    }
}

const mapsStateToProps = state => {
  return {
    ings: state.ingredients
  };
}

export default connect(mapsStateToProps)(Checkout);
