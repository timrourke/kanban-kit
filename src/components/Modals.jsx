import React, { Component } from 'react';
import { SHOW_CREATE_PROJECT_MODAL } from './../actions/modals';
import CreateProjectModalContainer from './../containers/modals/CreateProjectModalContainer';

class Modals extends Component {
  render() {
    let ModalComponent = '';

    switch (this.props.modals.modalShowing) {
      case SHOW_CREATE_PROJECT_MODAL:
        ModalComponent = <CreateProjectModalContainer  />;
        break;
      default:
        ModalComponent = '';
    }

    return (
      <div className='modals'>
        {(this.props.modals.isShowingModal && ModalComponent) ? (
          <div className="modal-wrapper">
            {ModalComponent}
          </div>
        ) : ('')}
      </div>
    );
  }
}

export default Modals;