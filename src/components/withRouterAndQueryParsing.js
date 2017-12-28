import qs from 'query-string';
import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * HOC for wrapping a component with react-router's Router context and parsing
 * the query params in the location for a component already wrapped with
 * `ReactRouter.withRouter`
 *
 * @param {React.Component|Function} Component
 * @return {React.Component|Function}
 * @final
 */
const withRouterAndQueryParsing = (Component) => {
  const C = (props) => {
    const {location, ...restOfProps} = props;
    const queryParams = {
      queryParams: qs.parse(location.search, {arrayFormat: 'bracket'}),
    };

    return <Component {...restOfProps} {...location} {...queryParams} />;
  }

  return withRouter(C);
}

export default withRouterAndQueryParsing;
