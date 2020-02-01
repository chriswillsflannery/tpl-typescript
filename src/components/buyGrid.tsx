import React from 'react';

interface MyDeals {
  dealID: string;
  asset: string;
}

interface MarketPlace {
  dealID: string;
  asset: string;
}

interface Props {
  name: string;
  myDeals?: MyDeals[];
  marketplace?: MarketPlace[];
}

type Object = {
  dealID: string,
  asset: string,
}

const BuyGrid: React.FC<Props> = (props) => {
  console.log('props', props);
  const listings: object[] = [];
  if (props.myDeals && !listings[0]) {
    (props.myDeals.forEach(obj => {
      listings.push(
        <div className="listing">
          <h3 className="listing-attribute">{obj.dealID}</h3>
          <h3 className="listing-attribute">{obj.asset}</h3>
          <h3 className="listing-link">
            <a href="#">VIEW BIDS</a>
          </h3>
        </div>
      )
    }))
  }

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
        <div className="info-line createNew">
          <h3><a href="#">CREATE DEAL</a></h3>
        </div>
      </div>
    </main>
  )
}

export default BuyGrid;
