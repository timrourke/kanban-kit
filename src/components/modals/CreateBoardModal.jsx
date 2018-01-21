import React, { Component } from 'react';
import { hideCreateBoardModal } from './../BoardsList';
import withRouterAndQueryParsing from './../withRouterAndQueryParsing';
import Modal from './../Modal';
import ModalBody from './../Modal/ModalBody';
import ModalFooter from './../Modal/ModalFooter';
import ModalHeader from './../Modal/ModalHeader';

const defaultColumns = [
  'Ready for Development',
  'In Progress',
  'Awaiting',
  'In Review',
  'Done',
];

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
      columnErrors: new Array(defaultColumns.length).fill(''),
      columns: defaultColumns.slice(),
      newBoardTitle: '',
      projectId,
    };

    this.hideCreateBoardModal = hideCreateBoardModal.bind(this);
    this.handleOnChangeBoardTitle = this.handleOnChangeBoardTitle.bind(this);
    this.handleOnChangeColumn = this.handleOnChangeColumn.bind(this);
    this.handleOnClickAddColumn = this.handleOnClickAddColumn.bind(this);
    this.handleOnClickDeleteColumn = this.handleOnClickDeleteColumn.bind(this);
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
  handleOnChangeBoardTitle(event) {
    event.preventDefault();

    this.setState(Object.assign({}, this.state, {
      newBoardTitle: event.target.value,
    }));
  }

  /**
   * Update a column's title
   *
   * @param {Event} object
   * @param {Number} targetIndex
   */
  handleOnChangeColumn(event, targetIndex) {
    event.preventDefault();

    const newColumns = this.state.columns
      .slice()
      .map((column, index) => {
        return (index === targetIndex) ?
          event.target.value :
          column;
      });

    this.setState(Object.assign({}, this.state, {
      columns: newColumns,
    }));
  }

  /**
   * Delete a column
   *
   * @param {Object} event
   * @param {Number} targetIndex
   */
  handleOnClickDeleteColumn(event, targetIndex) {
    event.preventDefault();

    this.setState(Object.assign({}, this.state, {
      columns: this.state.columns.filter((column, index) => {
        return targetIndex !== index;
      }),
    }));
  }

  /**
   * Add a column
   *
   * @param {Object} event
   */
  handleOnClickAddColumn(event) {
    event.preventDefault();

    this.setState(Object.assign({}, this.state, {
      columns: this.state.columns.slice().concat(['']),
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

    const columnErrors = this.state.columns.map((columnTitle) => {
      if (!columnTitle.trim()) {
        return 'Required. Please provide a column title.';
      }

      return '';
    });

    if (columnErrors.filter((err) => err).length) {
      this.setState(Object.assign({}, this.state, {
        columnErrors,
      }));

      return;
    }

    //this.props.createBoard(this.state.projectId, newBoardTitle);
    this.props.createBoardWithColumnsAndRow(
      this.state.projectId,
      newBoardTitle,
      this.state.columns
    );

    this.setState(Object.assign({}, this.state, {
      columns: defaultColumns.slice(),
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
              onChange={this.handleOnChangeBoardTitle}
              />
            <div>
              <h4 className="form-row">Columns</h4>
              <ul className="CreateBoardModal-column-titles">
                {this.state.columns.map((columnTitle, index) => {
                  const error = (this.state.columnErrors[index]) ?
                    (<div
                      className="form-error"
                    >{this.state.columnErrors[index]}</div>) :
                    null;

                  return (
                    <li
                      className="CreateBoardModal-column-title form-row row"
                      key={index}
                    >
                      <div className="col-xs-9 col-md-10">
                        <input
                          className="CreateBoardModal-column-title-input"
                          placeholder="New column's title"
                          type="text"
                          value={columnTitle}
                          onChange={(event) => this.handleOnChangeColumn(event, index)}
                        />
                      </div>
                      <div className="col-xs-3 col-md-2">
                        <button
                          className="CreateBoardModal-column-delete button"
                          onClick={(event) => this.handleOnClickDeleteColumn(event, index)}
                        >Delete</button>
                      </div>
                      <div className="col-xs-12">
                        {error}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <button
                className="CreateBoardModal-column-add button"
                onClick={this.handleOnClickAddColumn}
              >Add New Column</button>
            </div>
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
