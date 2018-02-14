import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axiosOrders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state= {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
      value: 'Kyriakos'
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
      value: 'somewhere'
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value:'1106ds'
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value:'Netherlands'
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value:'test@test.com'
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value:'fastest', displayValue: 'Fastest'},
            {value:'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value:'test@test.com'
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false });
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({loading: false });
    });
    }

  render () {
    let form = (
      <form>
        <Input elementType="" elementConfig="" value=""/>
        <Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
        <Input inputtype="input" type="text" name="street" placeholder="Street" />
        <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
        <Button btntype="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    ) ;
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
