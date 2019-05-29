import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stockObject) => {
            return <Stock
              stock={stockObject}
              key={stockObject.id}
              handleClick={this.props.buyStock}
            />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
