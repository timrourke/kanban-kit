import React, { Component } from 'react';
import Card from './Card';

class Columns extends Component {
  render() {
    return (
      <div className="Columns-wrap">
        {this.props.columns.map((column, index) => {
          const numCardsToRender = Math.floor(Math.random() * 10) + 1;
          const cards = [];

          for (let i = 0; i < numCardsToRender; i++) {
            cards.push(
              <li
                key={`column-${column.id}-column-${index+1}-card-${i+1}`}
              >
                <Card />
              </li>
            );
          }

          return (
            <ul
              className="Column"
              key={`column-${column.id}-column-${index+1}`}
            >
              {cards}
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Columns;
