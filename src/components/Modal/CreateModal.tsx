import React from 'react';

import './Modal.css';

const CreateModal = (props: any) => (
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

