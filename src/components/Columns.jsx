import React, { Component } from 'react';
import Card from './Card';

class Columns extends Component {
  constructor(props) {
    super(props);

    this.handleOnClickAddCard = this.handleOnClickAddCard.bind(this);
  }

  handleOnClickAddCard(columnId) {
    this.props.createCard(columnId, this.props.row.id, 'New Card');
  }

  render() {
    return (
      <div className="Columns-wrap">
        {this.props.columns.map((column, index) => {
          const cards = this.props.cards.filter((card) => {
            return card.column === column.id &&
              card.row === this.props.row.id;
          }).map((card) => {
            return (
              <li
                key={card.id}
              >
                <Card card={card} />
              </li>
            );
          });

          return (
            <ul
              className="Column"
              key={`column-${column.id}-column-${index+1}`}
            >
              {cards}
              <li>
                <article className="Card Card-add-card">
                  <p className="Card-title">
                    <button
                      className="add-card"
                      onClick={() => this.handleOnClickAddCard(column.id)}
                    >Add New Card</button>
                  </p>
                </article>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Columns;
