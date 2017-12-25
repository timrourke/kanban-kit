import React, { Component } from 'react';

class CreateProject extends Component {
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
    this.props.history.push('/projects');
  }

  render() {
    return (
      <div className="CreateProject">
        <header className="CreateProject-header">
          <h3>Create a project</h3>
        </header>
        <form action="" onSubmit={this.handleOnSubmit}>
          <input
            className="CreateProject-title-input"
            name="CreateProject-title-input"
            placeholder="New project title"
            type="text"
            value={this.state.newProjectTitle}
            onChange={this.handleOnChange}
            />
          <input
            className="CreateProject-submit"
            name="CreateProject-submit"
            type="submit"
            value="Create"
            />
        </form>
      </div>
    );
  }
}

export default CreateProject;
