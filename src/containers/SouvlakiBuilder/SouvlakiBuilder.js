import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Souvlaki from '../../components/Souvlaki/Souvlaki';
import BuildControls from '../../components/Souvlaki/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Souvlaki/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as souvlakiBuilderActions from '../../store/actions/index';
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

  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  //   this.updatePurchaseState(updatedIngredients);
  // }
  //
  // removeIngredientHandler = (type) => {
  //   console.log("I am here");
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  //   this.updatePurchaseState(updatedIngredients);
  // }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&');
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString
    // });
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
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(souvlakiBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(souvlakiBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(souvlakiBuilderActions.initIngredients())
  };
}
export default connect(mapsStateToProps, mapDispatchToProps)(withErrorHandler(SouvlakiBuilder, axios));
