/**
 * @author @chriswillsflannery
 * @exports CreateModal
 * a stateless functional component which renders a modal window.
 */

import React from 'react';

import './Modal.css';

interface Props {
  action: string;
  handleClick: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
}

const CreateModal: React.FC<Props> = (props) => (
  <div className="modal">
    <header className="modal-header">
      {props.action === 'creating' ?
        <h4>CREATE NEW DEAL</h4> :
        <h4>PLACE BID</h4>}
      <h4 id="x" onClick={props.handleClick}>X</h4>
    </header>
    <div className="modal-form">
      {props.children}
    </div>
  </div>
);

export default CreateModal;

