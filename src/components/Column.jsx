import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
  render() {
    return (
      <div className="Column-wrap">
        <ul className="Column">
          <li>
            <Card />
          </li>
        </ul>
        <ul className="Column">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
        <ul className="Column">
          <li>
            <Card />
          </li>
        </ul>
        <ul className="Column">
          <li>
            <Card />
          </li>
        </ul>
        <ul className="Column">
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    );
  }
}

export default Column;
