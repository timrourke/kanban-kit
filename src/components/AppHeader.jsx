import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

/**
 * Regular expression to match a '/projects' or '/projects/:projectId' path
 *
 * @property PROJECTS_PATH_REGEX
 * @type {RegExp}
 * @final
 */
const PROJECTS_PATH_REGEX = /^\/projects\/?([a-f0-9-]+)?\/?$/;

/**
 * Regular expression to match a '/projects/:projectId/boards' or
 * '/projects/:projectId/boards/:boardId' path
 *
 * @property BOARDS_PATH_REGEX
 * @type {RegExp}
 * @final
 */
const BOARDS_PATH_REGEX = /^\/projects\/?([a-f0-9-]+)(\/boards\/?)?([a-f0-9-]+)?\/?$/;

class AppHeader extends Component {

  /**
   * Test a string for matching against a '/projects' or '/projects/:projectId'
   * path
   *
   * @param {String} pathname
   * @return {String[]|null}
   * @static
   */
  static pathMatchesProjects(pathname) {
    return PROJECTS_PATH_REGEX.exec(pathname);
  }

  /**
   * Test a string for matching against a '/projects/:projectId/boards' or
   * '/projects/:projectId/boards/:boardId' path
   *
   * @param {String} pathname
   * @return {String[]|null}
   * @static
   */
  static pathMatchesBoards(pathname) {
    return BOARDS_PATH_REGEX.exec(pathname);
  }

  /**
   * Constructor.
   *
   * @param {Object} props
   * @param {Object} props.history
   */
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
  handleRouterEvent(pathName) {
    const locationSuffix = this.getLocationSuffix(pathName);

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
    let matches;

    matches = AppHeader.pathMatchesProjects(pathname)
    if (matches) {
      const projectId = matches[1];

      return (projectId) ?
        ` - ${this.getProjectTitleById(projectId)}: Boards`:
        ' - Projects';
    }

    matches = AppHeader.pathMatchesBoards(pathname)
    if (matches) {
      const projectId = matches[1];
      const boardId   = matches[3] || null;

      return (boardId) ?
        ` - ${this.getProjectTitleById(projectId)}: ${this.getBoardTitleById(boardId)}`:
        ` - ${this.getProjectTitleById(projectId)}: Boards`;
    }

    return '';
  }

  /**
   * Get board title by ID
   *
   * @param {String} boardId
   * @return {String}
   */
  getBoardTitleById(boardId) {
    return this.props.boards.reduce((acc, currentBoard) => {
      return (currentBoard.id === boardId && currentBoard.title) || acc;
    }, '');
  }

  /**
   * Get project title by ID
   *
   * @param {String} projectId
   * @return {String}
   */
  getProjectTitleById(projectId) {
    return this.props.projects.reduce((acc, currentProject) => {
      return (currentProject.id === projectId && currentProject.title) || acc;
    }, '');
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
        ><NavLink exact
            to="/">Kanban Kit</NavLink>{this.state.locationSuffix}
        </h1>
        <nav className="AppHeader-nav">
          <ul>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/project/boards">Boards</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(AppHeader);
