import React from 'react';

const ModalBody = function ModalBody(props) {
  return (
    <main className="modal-body">
      {props.children}
    </main>
  );
}

export default ModalBody;
