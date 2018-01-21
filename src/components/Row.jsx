import React, { Component } from 'react';
import Columns from './Columns';
import ColumnsHeader from './ColumnsHeader';

class Row extends Component {
  render() {
    return (
      <section className="Row">
        <header className="Row-header">
          <h3 className="Row-title">{this.props.row.title}</h3>
          <ColumnsHeader columns={this.props.columns} />
        </header>
        <Columns columns={this.props.columns} />
      </section>
    );
  }
}

export default Row;
