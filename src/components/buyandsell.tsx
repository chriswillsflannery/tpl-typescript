import React, { useState, useReducer } from 'react';
import BuyGrid from './buyGrid';
import Backdrop from './Backdrop/Backdrop';
import CreateModal from './Modal/CreateModal';
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
        ...state,
        deals: [
          ...state.deals,
          action.payload
        ]
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
  const [creating, setCreating] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [assetName, setAssetName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //dispatch action
    dispatch({ type: 'setMyDeals', payload: { dealID: 'XXXXXX', asset: assetName } });
    // close backdrop
    setCreating(false);
  }

  const handleBDClick = (e: any) => {
    console.log("HANDLED");
    setCreating(false);
  }

  return (
    <>
      {creating && <CreateModal handleClick={handleBDClick}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              onChange={e => setAssetName(e.target.value)}
              name="assetName"
              value={assetName}
              id="assetName"
              type="text"
              placeholder="Asset Name"></input>
          </div>
          <div className="form-control">
            <input
              id="submitName"
              type="submit"></input>
          </div>
        </form>
      </CreateModal>}
      {placing && <CreateModal handleClick={handleBDClick}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              onChange={e => setAssetName(e.target.value)}
              name="assetName"
              value={assetName}
              id="assetName"
              type="text"
              placeholder="Asset Name"></input>
          </div>
          <div className="form-control">
            <input
              id="submitName"
              type="submit"></input>
          </div>
        </form>
      </CreateModal>}
      {(creating || placing) && <Backdrop />}
      <div className="buyandsell">
        <BuyGrid
          name="My Deals"
          view="View Bids"
          state={state.deals}
          create={setCreating}
        />
        <BuyGrid
          name="Marketplace"
          view="Place Bid"
          state={state.marketplace}
          place={setPlacing} />
      </div>
    </>
  )
}

export default BuyAndSell;