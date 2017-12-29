import React, { Component } from 'react';

class CreateProjectModal extends Component {
  render() {
    return (
      <div className="modal">
        <header className="modal-header">
          <h3 className="modal-title">Modal Title</h3>
          <div className="modal-action">
            <button
              className="button"
              onClick={this.props.hideCreateProjectModal}
            >X</button>
          </div>
        </header>
        <main className="modal-body">
          <p>This is the body of a modal. If you do this, then that will happen, etc. Blah blah and some other stuff. Text?</p>
        </main>
        <footer className="modal-footer">
          <button
            className="button modal-cancel"
            onClick={this.props.hideCreateProjectModal}
          >Cancel</button>
          <button
            className="button modal-ok"
            onClick={this.props.hideCreateProjectModal}
          >OK</button>
        </footer>
      </div>
    );
  }
}

export default CreateProjectModal;
