import React from 'react';

class BuyGrid extends React.Component {
  render() {
    return (
      <main className="buyGrid">
        <div className="buyHeader">
          <h2>My Deals</h2>
        </div>
        <div className="info">
          <div className="info-line descriptors">
            <h3>DEAL ID</h3>
            <h3>ASSET</h3>
          </div>
          <div className="info-line listings">
            <div className="listing">
              <h3>A12345</h3>
              <h3>HTT</h3>
              <h3>VIEW BIDS</h3>
            </div>
            <div className="listing">
              <h3>A12345</h3>
              <h3>HTT</h3>
              <h3>VIEW BIDS</h3>
            </div>
            <div className="listing">
              <h3>A12345</h3>
              <h3>HTT</h3>
              <h3>VIEW BIDS</h3>
            </div>
          </div>
          <div className="info-line createNew">
            <h3>CREATE DEAL</h3>
          </div>
        </div>
      </main>
    )
  }
}

export default BuyGrid;