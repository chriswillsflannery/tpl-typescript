/**
 * @author @chriswillsflannery
 * @exports About
 * a stateless functional component which renders the splash "about" page.
 */

import React from 'react';
import logo from '../images/tpl-logo.png';
import './about.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-grid logo">
        <img src={logo} alt="TPL-logo" />
      </div>
      <div className="about-grid textinfo">
        <h2>Frontend task:</h2>
        <p>Design and build a simple user interface that:</p>
        <ul>
          <li>Allows a Party to create + manage Deals that they own</li>
          <li>Allows a Party to Bid on a Deal</li>
          <li>Allows a Party to "accept" a Bid on a Deal, closing it from future Bids and moving the transaction onto the next phase</li>
        </ul>
        <p>Please include a README containing instructions on how to build / run your code.</p>
      </div>
    </div >
  )
}

export default About;