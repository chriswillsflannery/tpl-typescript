import React, { useReducer } from 'react';
import BuyGrid from './buyGrid';
import './buyandsell.css';

const initialState = {
  deals: [{
    dealID: 'A12345',
    asset: 'HTT'
  }, {
    dealID: 'B34567',
    asset: 'PSM'
  }, {
    dealID: 'C56789',
    asset: 'PPT'
  }],
  marketplace: [{
    dealID: 'D23456',
    asset: 'APP'
  }, {
    dealID: 'E45678',
    asset: 'LEG'
  }, {
    dealID: 'F89123',
    asset: 'OOG'
  }]
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'setMyDeals':
      return {
        deals: [
          ...state.deals,
          action.payload
        ],
        ...state
      };
    case 'setMarketPlace':
      return {
        ...state,
        marketplace: [
          ...state.marketplace,
          action.payload
        ]
      };
  }
}

const BuyAndSell: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="buyandsell">
      <BuyGrid name="My Deals" view="View Bids" state={state.deals} create={() => dispatch({ type: 'setMyDeals' })} />
      <BuyGrid name="Marketplace" view="Place Bid" state={state.marketplace} />
    </div>
  )
}

export default BuyAndSell;