import React, { useState, useEffect } from 'react';
import BuyGrid from './buyGrid';
import './buyandsell.css';


// this.state = {
//   myDeals: [{
//     dealID: 'A12345',
//     asset: 'HTT'
//   }, {
//     dealID: 'B34567',
//     asset: 'PSM'
//   }, {
//     dealID: 'C56789',
//     asset: 'PPT'
//   }],
//   marketPlace: [{
//     dealID: 'D23456',
//     asset: 'APP'
//   }, {
//     dealID: 'E45678',
//     asset: 'LEG'
//   }, {
//     dealID: 'F89123',
//     asset: 'OOG'
//   }]


// type BuyState = {
//   myDeals: object[],
//   marketPlace: object[]
// }

const BuyAndSell: React.FC = () => {
  const [myDeals, setMyDeals] = useState([] as any);
  const [marketPlace, setMarketPlace] = useState([] as any);

  useEffect(() => {
    setMyDeals([
      ...myDeals,
      {
        dealID: 'A12345',
        asset: 'HTT'
      }, {
        dealID: 'B34567',
        asset: 'PSM'
      }, {
        dealID: 'C56789',
        asset: 'PPT'
      }
    ]);
    setMarketPlace([
      ...marketPlace,
      {
        dealID: 'D23456',
        asset: 'APP'
      }, {
        dealID: 'E45678',
        asset: 'LEG'
      }, {
        dealID: 'F89123',
        asset: 'OOG'
      }
    ])
  }, [marketPlace, myDeals])

  return (
    <div className="buyandsell">
      <BuyGrid name="My Deals" />
      <BuyGrid name="Marketplace" />
    </div>
  )
}

export default BuyAndSell;