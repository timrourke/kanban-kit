import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class AppHeader extends Component {
  constructor({ history }) {
    super(...arguments);

    this.state = {
      locationSuffix: this.getLocationSuffix(history.location.pathname),
    };

    this.getLocationSuffix = this.getLocationSuffix.bind(this);
    this.handleRouterEvent = this.handleRouterEvent.bind(this);

    // Bind router event listener
    this.removeRouterEventListener = history.listen((routerEvent) => {
      this.handleRouterEvent(routerEvent.pathname);
    });
  }

  /**
   * Initialize the document's title for the current route
   */
  componentDidMount() {
    this.setDocumentTitle(
      this.getLocationSuffix(this.props.history.location.pathname)
    );
  }

  /**
   * Update the document title when the route changes
   */
  handleRouterEvent(routerEvent) {
    const locationSuffix = this.getLocationSuffix(routerEvent);

    this.setState({
      locationSuffix: locationSuffix,
    });

    this.setDocumentTitle(locationSuffix);
  }

  /**
   * Tear down the router event listener on component unmount
   */
  componentWillUnmount() {
    this.removeRouterEventListener();
  }

  /**
   * Get the string suffix describing the current router location
   *
   * @param {String} pathname The current location's pathname
   * @return {String}
   */
  getLocationSuffix(pathname = '') {
    switch (pathname) {
      case '/boards':
        return ' - Boards';
      case '/boards/create':
        return ' - Create new board';
      default:
        return '';
    }
  }

  /**
   * Set the document title
   *
   * @param {String} locationSuffix String to append to "Kanban Kit"
   */
  setDocumentTitle(locationSuffix = '') {
    document.title = `Kanban Kit${locationSuffix}`;
  }

  render() {
    return (
      <header className="AppHeader">
        <h1
          className="AppHeader-title"
        ><NavLink
            to="/">Kanban Kit</NavLink>{this.state.locationSuffix}
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/boards">Boards</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(AppHeader);
