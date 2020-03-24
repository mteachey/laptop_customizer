import React, { Component } from 'react';
import '../Cart/Cart.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default class CartItemOption extends Component {
    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selectedOption}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(this.props.cost)}
            </div>
          </div>
        );
    }
}