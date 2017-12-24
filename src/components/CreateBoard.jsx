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

  handleOnChange(event) {
    event.preventDefault();

    this.setState({
      newBoardTitle: (event.target.value || '').trim(),
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const newBoardTitle = this.state.newBoardTitle.trim();

    if (!newBoardTitle) {
      return;
    }

    // TODO: pass in project id
    this.props.createBoard('some-project-id', newBoardTitle);
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
