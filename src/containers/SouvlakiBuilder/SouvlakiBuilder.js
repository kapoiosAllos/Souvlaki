import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Souvlaki from '../../components/Souvlaki/Souvlaki';
import BuildControls from '../../components/Souvlaki/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Souvlaki/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axiosOrders';

class SouvlakiBuilder extends Component {
  state = {
    purchasing: false
  }

  componentDidMount () {
    this.props.onInitIngredients();
  }

  updatePurchaseState (ingredients){
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum +el;
    }, 0);
    return  sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({purchasing: true});
    } else {
      this.props.history.push('/auth');
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }

  render () {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    };
    let orderSummary = null;
    let souvlaki = this.props.error ? <p> Ingredients cant be displayed </p> : <Spinner/>;

    if (this.props.ings) {
      souvlaki = (
        <Aux>
            <Souvlaki ingredients = {this.props.ings} />
          <BuildControls
            ingredientAdded = {this.props.onIngredientAdded}
            ingredientRemoved = {this.props.onIngredientRemoved}
            disabled = {disabledInfo}
            purchaseable = {this.updatePurchaseState(this.props.ings)}
            ordered = {this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
            price = {this.props.price}
          />
        </Aux>
      );
      orderSummary = <OrderSummary
      ingredients={this.props.ings}
      price={this.props.price}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaceContinued={this.purchaseContinueHandler}/>;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
          {souvlaki}
      </Aux>
    );
  }
}

const mapsStateToProps = state => {
  return {
    ings: state.souvlakiBuilder.ingredients,
    price: state.souvlakiBuilder.totalPrice,
    error: state.souvlakiBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
}
export default connect(mapsStateToProps, mapDispatchToProps)(withErrorHandler(SouvlakiBuilder, axios));
