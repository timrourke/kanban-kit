import React, { Component } from 'react';
import { hideCreateBoardModal } from './../BoardsList';
import withRouterAndQueryParsing from './../withRouterAndQueryParsing';
import Modal from './../Modal';
import ModalBody from './../Modal/ModalBody';
import ModalFooter from './../Modal/ModalFooter';
import ModalHeader from './../Modal/ModalHeader';


class CreateBoardModal extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    const projectId = props.modals.modalState.projectId;
    const boardsLinkPrefix = `/projects/${projectId}/boards`;

    this.state = {
      boardsLinkPrefix,
      newBoardTitle: '',
      projectId,
    };

    this.hideCreateBoardModal = hideCreateBoardModal.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    // Bind router event listener
    this.removeRouterEventListener = props.history.listen(() => {
      this.hideCreateBoardModal(false);
    });
  }

  componentWillUnmount() {
    this.removeRouterEventListener();
  }

  /**
   * Handle the form's input's change event
   *
   * Set the title for the new board
   *
   * @param {Object} event
   */
  handleOnChange(event) {
    event.preventDefault();

    this.setState(Object.assign({}, this.state, {
      newBoardTitle: event.target.value,
    }));
  }

  /**
   * Handle the form's submit event
   *
   * Create a board and transition to the new board
   *
   * TODO: transition to new board
   *
   * @param {Object} event
   */
  handleOnSubmit(event) {
    event.preventDefault();

    const newBoardTitle = this.state.newBoardTitle.trim();

    if (!newBoardTitle) {
      return;
    }

    this.props.createBoard(this.state.projectId, newBoardTitle);

    this.setState(Object.assign({}, this.state, {
      newBoardTitle: '',
    }));

    // TODO: use redux-thunk to transition to new board in create action
    this.hideCreateBoardModal();
  }

  render() {
    return (
      <Modal>
        <ModalHeader title="Create Board">
          <button
            className="button"
            onClick={this.hideCreateBoardModal}
          >X</button>
        </ModalHeader>
        <ModalBody>
          <p>Create a new board.</p>
          <form action="" onSubmit={this.handleOnSubmit}>
            <input
              className="CreateBoardModal-title-input"
              name="CreateBoardModal-title-input"
              placeholder="New board's title"
              type="text"
              value={this.state.newBoardTitle}
              onChange={this.handleOnChange}
              />
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            className="button modal-cancel"
            onClick={this.hideCreateBoardModal}
          >Cancel</button>
          <button
            className="button modal-ok"
            onClick={this.handleOnSubmit}
          >OK</button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default withRouterAndQueryParsing(CreateBoardModal);
