import React from 'react';

const ModalHeader = function ModalHeader(props) {
  return (
    <header className="modal-header">
      <h3 className="modal-title">{props.title}</h3>
      <div className="modal-action">
        {props.children}
      </div>
    </header>
  );
}

export default ModalHeader;
