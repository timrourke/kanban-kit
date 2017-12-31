import React from 'react';

const ModalFooter = function ModalFooter(props) {
  return (
    <footer className="modal-footer">
      {props.children}
    </footer>
  );
}

export default ModalFooter;
