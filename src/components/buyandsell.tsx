/**
 * @author @chriswillsflannery
 * @exports BuyAndSell
 * a stateful functional component which displays the buy/sell view.
 * contains main buying and selling logic.
 */

import React, { useState, useReducer } from 'react';
import BuyGrid from './buyGrid';
import Backdrop from './Backdrop/Backdrop';
import CreateModal from './Modal/CreateModal';
import BidsModal from './Modal/BidsModal';
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
  const [creating, setCreating] = useState<boolean>(false);
  const [placing, setPlacing] = useState<boolean>(false);
  const [bidding, setBidding] = useState<boolean>(false);
  const [assetName, setAssetName] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (creating) {
      //dispatch action
      dispatch({ type: 'setMyDeals', payload: { dealID: 'XXXXXX', asset: assetName } });
      // close backdrop
      setCreating(false);
    } else if (placing) {
      setPlacing(false);
      alert("Bid Placed!");
    }
  }

  const handleXClick = () => {
    setCreating(false);
    setPlacing(false);
    setBidding(false);
  }

  const handleAccept = () => {
    setBidding(false);
    alert("Bid accepted!")
    // move to next window
    window.open('/', '_blank');
  }

  return (
    <>
      {creating && <CreateModal action="creating" handleClick={handleXClick}>
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

      {placing && <CreateModal action="placing" handleClick={handleXClick}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              onChange={e => setAssetName(e.target.value)}
              name="assetName"
              value={assetName}
              id="assetName"
              type="text"
              placeholder="Bid Value"></input>
          </div>
          <div className="form-control">
            <input
              id="submitName"
              type="submit"></input>
          </div>
        </form>
      </CreateModal>}
      {bidding && <BidsModal
        handleClick={handleXClick}
        handleAccept={handleAccept}
      >
      </BidsModal>}

      {(creating || placing || bidding) && <Backdrop />}
      <div className="buyandsell">
        <BuyGrid
          name="My Deals"
          view="View Bids"
          state={state.deals}
          create={setCreating}
          bid={setBidding}
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