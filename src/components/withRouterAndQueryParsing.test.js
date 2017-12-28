import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';

describe('components/withRouterAndQueryParsing', () => {
  const node = document.createElement('div');

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  it('provides { queryParams } props', () => {
    const PropsChecker = withRouterAndQueryParsing(props => {
      expect(typeof props.queryParams).toBe('object');

      return null;
    });

    ReactDOM.render((
      <MemoryRouter initialEntries={[ '/tacos' ]} >
        <Route path='/tacos' render={() => (
          <PropsChecker />
        )} />
      </MemoryRouter>
    ), node);
  });

  it('parses query params', () => {
    const PropsChecker = withRouterAndQueryParsing(props => {
      expect(props.queryParams.foo).toBe('bar');
      expect(props.queryParams.hats)
        .toEqual(expect.arrayContaining(['cheese', 'cookies']));

      return null;
    });

    ReactDOM.render((
      <MemoryRouter initialEntries={[ '/tacos?foo=bar&hats[]=cheese&hats[]=cookies' ]} >
        <Route path='/tacos' render={() => (
          <PropsChecker />
        )} />
      </MemoryRouter>
    ), node);
  });
});
