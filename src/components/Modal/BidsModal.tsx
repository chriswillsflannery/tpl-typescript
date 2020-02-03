import React from 'react';
import "./Modal.css";


const dummyBids = [
  {
    date: '1/30/2020',
    party: 'Eriksson',
    value: '14,410.20'
  },
  {
    date: '1/30/2020',
    party: 'Roberts',
    value: '14,400.00'
  },
  {
    date: '1/30/2020',
    party: 'Abad',
    value: '14,200.20'
  }
]

const BidsModal = (props: any) => {
  const bids: object[] = [];
  dummyBids.forEach((bid, idx) => {
    bids.push(
      <div>
        <ul className="modal-grid-list">
          <li>{bid.date}</li>
          <li>{bid.party}</li>
          <li>{bid.value}</li>
          {idx === 0 && <button onClick={props.handleAccept}>Accept</button>}
        </ul>
      </div>
    )
  })

  return (
    <div className="modal">
      <header className="modal-header">
        <h4>ASSET</h4>
        <h4 id="x" onClick={props.handleClick}>X</h4>
      </header>
      <div className="modal-grid">
        <header>
          <ul className="modal-grid-list">
            <li>DATE</li>
            <li>PARTY</li>
            <li>VALUE</li>
          </ul>
        </header>
        {bids}
      </div>
    </div>
  )
}

export default BidsModal;