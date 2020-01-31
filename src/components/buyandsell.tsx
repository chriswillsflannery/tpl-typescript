import React from 'react';
import BuyGrid from './buyGrid';
import './buyandsell.css';

class BuyAndSell extends React.Component {
  render() {
    return (
      <div className="buyandsell">
        <BuyGrid />
        <BuyGrid />
      </div>
    )
  }
}

export default BuyAndSell;