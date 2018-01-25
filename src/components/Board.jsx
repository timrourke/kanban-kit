import React, { Component } from 'react';
import { debounce } from 'lodash';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';
import RowContainer from './../containers/RowContainer';

class Board extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    const boardId = props.match.params.boardId;

    // Set the initial state
    this.state = {
      boardId,
      // Height of the scroll container
      scrollContainerHeight: 0,
    };

    this.calculateHeight = this.calculateHeight.bind(this);
    this.getColumnsForBoard = this.getColumnsForBoard.bind(this);
    this.getRowsForBoard = this.getRowsForBoard.bind(this);
  }

  /**
   * Calculate the height of the scroll container and update the component state
   */
  calculateHeight() {
    if (!('scrollWrapper' in this) || !this.scrollWrapper) {
      return;
    }

    const windowHeight = window.innerHeight;
    const scrollContainerHeight = windowHeight - this.scrollWrapper.offsetTop;

    this.setState(Object.assign({}, this.state, {
      scrollContainerHeight: scrollContainerHeight,
    }));
  }

  /**
   * Debounce a call to recalculate the height of the scroll container
   */
  debounceCalculateHeight() {
    return debounce(this.calculateHeight, 200, {});
  }

  getColumnsForBoard() {
    return this.props.columns.filter((column) => {
      return column.board === this.state.boardId;
    });
  }

  getRowsForBoard() {
    return this.props.rows.filter((row) => {
      return row.board === this.state.boardId;
    });
  }

  /**
   * Calculate the scroll container's height on window resize
   */
  componentDidMount() {
    window.addEventListener('resize', this.debounceCalculateHeight());

    this.calculateHeight();
  }

  /**
   * Remove the event listeners on component unmount
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceCalculateHeight());
  }

  render() {
    return (
      <main className="Board">
        <header className="Board-header">
          <h2 className="Board-title">Build a kanban board</h2>
        </header>
        <ul
          className="Row-wrapper"
          ref={(el) => { this.scrollWrapper = el; }}
          style={{ height: `${this.state.scrollContainerHeight}px`}}
        >
          {this.getRowsForBoard().map((row) => {
            return (
              <li key={row.id}>
                <RowContainer
                  columns={this.getColumnsForBoard()}
                  row={row}
                />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default withRouterAndQueryParsing(Board);
