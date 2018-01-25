import React, { Component } from 'react';
import Columns from './Columns';
import ColumnsHeader from './ColumnsHeader';

/**
 * Move the cursor to the end of the input
 *
 * @param {HTMLElement} el
 */
function moveCursorToEnd(el) {
	if (typeof el.selectionStart === "number") {
		el.selectionStart = el.selectionEnd = el.value.length;
	} else if (typeof el.createTextRange !== "undefined") {
		el.focus();
		const range = el.createTextRange();
		range.collapse(false);
		range.select();
	}
}

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditingTitle: false,
      newTitleError: '',
      newTitleText: props.row.title,
    };

    this.handleBlurTitle = this.handleBlurTitle.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleClickTitle = this.handleClickTitle.bind(this);
    this.handleKeyDownTitle = this.handleKeyDownTitle.bind(this);
    this.newTitleInput = null;
  }

  /**
   * Focus on the row's title input field if it is present in the view
   *
   * @event componentDidUpdate
   */
  componentDidUpdate() {
    if (!this.newTitleInput) {
      return;
    }

    this.newTitleInput.focus();

    moveCursorToEnd(this.newTitleInput);
  }

  handleKeyDownTitle(event) {
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();

    this.updateRowTitle();
  }

  handleBlurTitle() {
    this.updateRowTitle();
  }

  handleClickTitle() {
    this.setState(Object.assign({}, this.state, {
      isEditingTitle: true,
    }));
  }

  handleChangeTitle(event) {
    event.preventDefault();

    this.setState(Object.assign({}, this.state, {
      newTitleText: event.target.value,
    }));
  }

  updateRowTitle() {
    if (!this.state.newTitleText.trim()) {
      this.setState(Object.assign({}, this.state, {
        newTitleError: 'Required. Please provide a title for the row.',
      }));

      return;
    }

    const updatedRow = Object.assign({}, this.props.row, {
      title: this.state.newTitleText,
    });

    this.props.updateRow(
      updatedRow.id,
      updatedRow.board,
      updatedRow.order,
      updatedRow.title
    );

    this.setState(Object.assign({}, this.state, {
      isEditingTitle: false,
      newTitleError: '',
    }));
  }

  render() {
    const titleError = (this.state.newTitleError) ?
      (
        <div
          className="form-error"
        >{this.state.newTitleError}</div>
      ) :
      null;

    const title = (this.state.isEditingTitle) ?
      (
        <div>
          <input
            className="Row-title"
            onBlur={this.handleBlurTitle}
            onChange={this.handleChangeTitle}
            onKeyDown={this.handleKeyDownTitle}
            ref={(el) => { this.newTitleInput = el; }}
            value={this.state.newTitleText}
          />
          {titleError}
        </div>
      ) :
      (
        <h3
          className="Row-title"
          onClick={this.handleClickTitle}
        >{this.props.row.title}</h3>
      );

    return (
      <section className="Row">
        <header className="Row-header">
          {title}
          <ColumnsHeader columns={this.props.columns} />
        </header>
        <Columns columns={this.props.columns} />
      </section>
    );
  }
}

export default Row;
