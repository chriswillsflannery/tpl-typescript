import React from 'react';

interface Props {
  name: string;
}

const BuyGrid = (props: Props) => {
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
          <div className="listing">
            <h3 className="listing-attribute">A12345</h3>
            <h3 className="listing-attribute">HTT</h3>
            <h3 className="listing-link">
              <a href="#">VIEW BIDS</a>
            </h3>
          </div>
          <div className="listing">
            <h3 className="listing-attribute">A12345</h3>
            <h3 className="listing-attribute">HTT</h3>
            <h3 className="listing-link">
              <a href="#">VIEW BIDS</a>
            </h3>
          </div>
          <div className="listing">
            <h3 className="listing-attribute">A12345</h3>
            <h3 className="listing-attribute">HTT</h3>
            <h3 className="listing-link">
              <a href="#">VIEW BIDS</a>
            </h3>
          </div>
        </div>
        <div className="info-line createNew">
          <h3><a href="#">CREATE DEAL</a></h3>
        </div>
      </div>
    </main>
  )
}

export default BuyGrid;
