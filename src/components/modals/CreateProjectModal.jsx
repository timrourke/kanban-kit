import React, { Component } from 'react';
import withRouterAndQueryParsing from './../withRouterAndQueryParsing';

class CreateProjectModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProjectTitle: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
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
    this.props.hideCreateProjectModal();
    this.props.history.push('/projects');
  }

  render() {
    return (
      <div className="modal">
        <header className="modal-header">
          <h3 className="modal-title">Create Project</h3>
          <div className="modal-action">
            <button
              className="button"
              onClick={this.props.hideCreateProjectModal}
            >X</button>
          </div>
        </header>
        <main className="modal-body">
          <form action="" onSubmit={this.handleOnSubmit}>
            <input
              className="CreateProjectModal-title-input"
              name="CreateProjectModal-title-input"
              placeholder="New project title"
              type="text"
              value={this.state.newProjectTitle}
              onChange={this.handleOnChange}
              />
          </form>
        </main>
        <footer className="modal-footer">
          <button
            className="button modal-cancel"
            onClick={this.props.hideCreateProjectModal}
          >Cancel</button>
          <button
            className="button modal-ok"
            onClick={this.handleOnSubmit}
          >OK</button>
        </footer>
      </div>
    );
  }
}

export default withRouterAndQueryParsing(CreateProjectModal);
