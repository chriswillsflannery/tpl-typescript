import React from 'react';

interface State {
  dealID: string;
  asset: string;
}

interface Props {
  name: string;
  state?: State[];
  create?: any;
  place?: any;
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
            {props.name === 'My Deals' && <a href="#">{props.view}</a>}
            {props.name === 'Marketplace' && <a onClick={() => props.place(true)}>{props.view}</a>}
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
            <button onClick={() => {
              console.log('hit');
              props.create(true)
            }}>CREATE DEAL</button>
          </div>}
      </div>
    </main>
  )
}

export default BuyGrid;
