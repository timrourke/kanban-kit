import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { debounce } from 'lodash';
import Row from './Row';

class Board extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    // Set the initial state
    this.state = {
      // Height of the scroll container
      scrollContainerHeight: 0,
    };

    this.calculateHeight = this.calculateHeight.bind(this);
  }

  /**
   * Calculate the height of the scroll container and update the component state
   */
  calculateHeight() {
    if (!('scrollWrapper' in this)) {
      return;
    }

    const windowHeight = window.innerHeight;
    const scrollContainerHeight = windowHeight - this.scrollWrapper.offsetTop;

    this.setState({
      scrollContainerHeight: scrollContainerHeight,
    });
  }

  /**
   * Debounce a call to recalculate the height of the scroll container
   */
  debounceCalculateHeight() {
    return debounce(this.calculateHeight, 200, {});
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
          <li>
            <Row />
          </li>
          <li>
            <Row />
          </li>
        </ul>
      </main>
    );
  }
}

export default withRouter(Board);
