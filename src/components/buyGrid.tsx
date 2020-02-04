/**
 * @author @chriswillsflannery
 * @exports BuyGrid
 * a stateless functional component which renders a "bids" or "market" div.
 */

import React from 'react';

interface State {
  dealID: string;
  asset: string;
}

interface Props {
  name: string;
  state?: State[];
  create?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  place?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bid?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  view: string;
}

const BuyGrid: React.FC<Props> = (props) => {
  // console.log('props', props);
  const listings: object[] = [];
  props.state &&
    (props.state.forEach((obj, idx) => {
      listings.push(
        <div key={idx} className="listing">
          <h3 className="listing-attribute">{obj.dealID}</h3>
          <h3 className="listing-attribute">{obj.asset}</h3>
          <h3 className="listing-link">
            {props.name === 'My Deals' && <button onClick={props.bid}>{props.view}</button>}
            {props.name === 'Marketplace' && <button onClick={props.place}>{props.view}</button>}
          </h3>
        </div>
      )
    }))

  return (
    <main className="buyGrid">
      <header className="buyHeader">
        <h2>{props.name}</h2>
      </header>
      <div className="info">
        <div className="info-line descriptors">
          <h3>DEAL ID</h3>
          <h3>ASSET</h3>
        </div>
        <div className="info-line listings">
          {listings}
        </div>
        {props.name === 'My Deals' &&
          <div className="info-line createNew">
            <button onClick={props.create}>
              CREATE DEAL
            </button>
          </div>}
      </div>
    </main>
  )
}

export default BuyGrid;
