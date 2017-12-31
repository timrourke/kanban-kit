import React, { Component } from 'react';
import { hideCreateProjectModal } from './../ProjectsList';
import withRouterAndQueryParsing from './../withRouterAndQueryParsing';
import Modal from './../Modal';
import ModalBody from './../Modal/ModalBody';
import ModalFooter from './../Modal/ModalFooter';
import ModalHeader from './../Modal/ModalHeader';

class CreateProjectModal extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      newProjectTitle: '',
    };

    this.hideCreateProjectModal = hideCreateProjectModal.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    // Bind router event listener
    this.removeRouterEventListener = props.history.listen(() => {
      this.hideCreateProjectModal(false);
    });
  }

  componentWillUnmount() {
    this.removeRouterEventListener();
  }

  /**
   * Handle th form's input's change event
   *
   * Set the title for the new project
   *
   * @param {Object} event
   */
  handleOnChange(event) {
    event.preventDefault();

    this.setState({
      newProjectTitle: event.target.value,
    });
  }

  /**
   * Handle the form's submit event
   *
   * Create a project and transition to the new project
   *
   * TODO: transition to new project
   *
   * @param {Object} event
   */
  handleOnSubmit(event) {
    event.preventDefault();

    const newProjectTitle = this.state.newProjectTitle.trim();

    if (!newProjectTitle) {
      return;
    }

    this.props.createProject(newProjectTitle);

    this.setState({
      newProjectTitle: '',
    });

    // TODO: use redux-thunk to transition to new project in create action
    this.hideCreateProjectModal();
  }

  render() {
    return (
      <Modal>
        <ModalHeader title="Create Project">
          <button
            className="button"
            onClick={this.hideCreateProjectModal}
          >X</button>
        </ModalHeader>
        <ModalBody>
          <p>Create a new project.</p>
          <form action="" onSubmit={this.handleOnSubmit}>
            <input
              className="CreateProjectModal-title-input"
              name="CreateProjectModal-title-input"
              placeholder="New project's title"
              type="text"
              value={this.state.newProjectTitle}
              onChange={this.handleOnChange}
              />
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            className="button modal-cancel"
            onClick={this.hideCreateProjectModal}
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

export default withRouterAndQueryParsing(CreateProjectModal);
