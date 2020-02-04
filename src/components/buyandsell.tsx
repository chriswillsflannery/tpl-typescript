/**
 * @author @chriswillsflannery
 * @exports BuyAndSell
 * a stateful functional component which displays the buy/sell view.
 * contains main buying and selling logic.
 */

import React, { useState, useReducer, SyntheticEvent } from 'react';
import BuyGrid from './buyGrid';
import Backdrop from './Backdrop/Backdrop';
import CreateModal from './Modal/CreateModal';
import BidsModal from './Modal/BidsModal';
import { reducer, initialState } from './Reducer/reducer';
import './buyandsell.css';

const BuyAndSell: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [creating, setCreating] = useState<boolean>(false);
  const [placing, setPlacing] = useState<boolean>(false);
  const [bidding, setBidding] = useState<boolean>(false);
  const [assetName, setAssetName] = useState<string>('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (creating) {
      dispatch({ type: 'setMyDeals', payload: { dealID: 'XXXXXX', asset: assetName } });
      setCreating(false);
    } else if (placing) {
      setPlacing(false);
      alert("Bid Placed!");
    }
  }

  const handleCreate = () => {
    setCreating(true);
  }

  const handleBid = () => {
    setBidding(true);
  }

  const handlePlace = () => {
    setPlacing(true);
  }

  const handleXClick = () => {
    setCreating(false);
    setPlacing(false);
    setBidding(false);
  }

  const handleAccept = () => {
    setBidding(false);
    alert("Bid accepted!")
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
          create={handleCreate}
          bid={handleBid}
        />
        <BuyGrid
          name="Marketplace"
          view="Place Bid"
          state={state.marketplace}
          place={handlePlace} />
      </div>
    </>
  )
}

export default BuyAndSell;