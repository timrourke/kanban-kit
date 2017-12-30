import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  PROJECTS_PATH_REGEX,
  PROJECTS_CREATE_PATH_REGEX,
  BOARDS_PATH_REGEX,
  BOARDS_CREATE_PATH_REGEX,
} from './../utils/path-regexes';

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
   * Test a string for matching against a '/projects/create' path
   *
   * @param {String} pathname
   * @return {Boolean}
   * @static
   */
  static pathMatchesProjectsCreate(pathname) {
    return PROJECTS_CREATE_PATH_REGEX.test(pathname);
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
   * Test a string for matching against a '/projects/:projectId/boards/create'
   * path
   *
   * @param {String} pathname
   * @return {Boolean}
   * @static
   */
  static pathMatchesBoardsCreate(pathname) {
    return BOARDS_CREATE_PATH_REGEX.exec(pathname);
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
    return this.getLocationSuffixForProjectsPaths(pathname) ||
      this.getLocationSuffixForBoardsPaths(pathname);
  }

  /**
   * Get the string suffix describing a current router location for a projects
   * page or subpage, if any
   *
   * @param {String} pathname
   * @return {String}
   */
  getLocationSuffixForProjectsPaths(pathname) {
    let matches = AppHeader.pathMatchesProjects(pathname)

    if (matches) {
      const projectId = matches[1];

      return (projectId) ?
        ` - ${this.getProjectTitleById(projectId)}: Boards`:
        ' - Projects';
    } else if (AppHeader.pathMatchesProjectsCreate(pathname)) {
      return ' - Create a project';
    }

    return '';
  }

  /**
   * Get the string suffix describing a current router location for a boards
   * page or subpage, if any
   *
   * @param {String} pathname
   * @return {String}
   */
  getLocationSuffixForBoardsPaths(pathname) {
    let matches = AppHeader.pathMatchesBoards(pathname)

    if (matches) {
      const projectId = matches[1];
      const boardId   = matches[3] || null;

      return (boardId) ?
        ` - ${this.getProjectTitleById(projectId)}: ${this.getBoardTitleById(boardId)}`:
        ` - ${this.getProjectTitleById(projectId)}: Boards`;
    }

    matches = AppHeader.pathMatchesBoardsCreate(pathname);

    if (matches) {
      const projectId = matches[1];

      return ` - ${this.getProjectTitleById(projectId)}: Create a board`;
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
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(AppHeader);
