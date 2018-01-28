import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <svg>
          <use xlinkHref={this.props.iconId} />
        </svg>
      </div>
    );
  }
}

export default Icon;
