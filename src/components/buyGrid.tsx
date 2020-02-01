import React from 'react';

interface State {
  dealID: string;
  asset: string;
}

interface Props {
  name: string;
  state?: State[];
  create?: any;
  view: string;
}

const BuyGrid: React.FC<Props> = (props) => {
  console.log('props', props);
  const listings: object[] = [];
  props.state &&
    (props.state.forEach((obj, idx) => {
      listings.push(
        <div key={idx} className="listing">
          <h3 className="listing-attribute">{obj.dealID}</h3>
          <h3 className="listing-attribute">{obj.asset}</h3>
          <h3 className="listing-link">
            <a href="#">{props.view}</a>
          </h3>
        </div>
      )
    }))

  return (
    <main className="buyGrid">
      <div className="buyHeader">
        <h2>{props.name}</h2>
      </div>
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
            <h3><a href="#">CREATE DEAL</a></h3>
          </div>}
      </div>
    </main>
  )
}

export default BuyGrid;
