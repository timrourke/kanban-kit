import React, { Component } from 'react';
import Column from './Column';

class Row extends Component {
  render() {
    return (
      <section className="Row">
        <header className="Row-header">
          <h3 className="Row-title">Design: Board layout</h3>
        </header>
        <Column />
      </section>
    );
  }
}

export default Row;
