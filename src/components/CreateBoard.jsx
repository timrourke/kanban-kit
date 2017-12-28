import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreateBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBoardTitle: '',
      projectId: props.match.params.projectId,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  /**
   * Handle th form's input's change event
   *
   * Set the title for the new board
   *
   * @param {Object} event
   */
  handleOnChange(event) {
    event.preventDefault();

    this.setState({
      newBoardTitle: event.target.value,
    });
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

    // TODO: pass in project id
    this.props.createBoard(this.state.projectId, newBoardTitle);

    this.setState({
      newBoardTitle: '',
    });

    // TODO: use redux-thunk to transition to new board in create action
    this.props.history.push(`/projects/${this.state.projectId}/boards`);
  }

  render() {
    return (
      <div className="CreateBoard">
        <header className="CreateBoard-header">
          <h3>Create a board</h3>
        </header>
        <form action="" onSubmit={this.handleOnSubmit}>
          <input
            className="CreateBoard-title-input"
            name="CreateBoard-title-input"
            placeholder="New board title"
            type="text"
            value={this.state.newBoardTitle}
            onChange={this.handleOnChange}
            />
          <input
            className="CreateBoard-submit"
            name="CreateBoard-submit"
            type="submit"
            value="Create"
            />
        </form>
      </div>
    );
  }
}

export default withRouter(CreateBoard);
