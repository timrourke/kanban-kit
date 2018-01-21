import React, { Component } from 'react';

class ColumnsHeader extends Component {
  render() {
    return (
      <div className="ColumnsHeader Columns-wrap">
        {this.props.columns.map((column) => {
          return (
            <div key={`header=${column.id}`} className="Column">
              <h4>{column.title}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ColumnsHeader;
