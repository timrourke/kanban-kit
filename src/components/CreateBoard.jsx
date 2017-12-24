import React, { Component } from 'react';

class CreateBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBoardTitle: '',
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
      newBoardTitle: (event.target.value || '').trim(),
    });
  }

  /**
   * Handle the form's submit event
   *
   * Create a board and transition to the new board
   *
   * TODO: transition to new board
   * TODO: pass project ID into component
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
    this.props.createBoard('some-project-id', newBoardTitle);

    this.setState({
      newBoardTitle: '',
    });

    // TODO: use redux-thunk to transition to new board in create action
    this.props.history.push('/boards');
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

export default CreateBoard;
