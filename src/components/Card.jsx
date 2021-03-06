import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <article className="Card">
        <header className="Card-header">
          <h4 className="Card-permalink">DESIGN-1</h4>
        </header>
        <p className="Card-title">{this.props.card.title}</p>
      </article>
    );
  }
}

export default Card;
