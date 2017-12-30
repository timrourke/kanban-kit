import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';
import { parseDate } from './../utils/date';
import qs from 'query-string';

/**
 * Hide the create project modal
 *
 * @param {Boolean} redirectToProjectsPage Whether to redirect to the projects
 *     page
 */
export const hideCreateProjectModal = function hideCreateProjectModal(
  redirectToProjectsPage = true
) {
  this.props.hideCreateProjectModal();

  // Return early if no intention to redirect to projects page
  if (!redirectToProjectsPage) {
    return;
  }

  const currentQueryParams = Object.assign({}, this.props.queryParams);

  // Return early if the modal's query param isn't set
  if (!('create' in currentQueryParams)) {
    return;
  }

  delete currentQueryParams.create;

  const encodedQueryParams = qs.stringify(
    currentQueryParams,
    {arrayFormat: 'bracket'}
  );

  this.props.history.push(`/projects?${encodedQueryParams}`);
}

class ProjectsList extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   * @param {Object} props.queryParams
   */
  constructor({queryParams}) {
    super(...arguments);

    this.state = {
      queryStringWithCreate: `?${this.getQueryStringWithCreate()}`,
    };

    this.hideCreateProjectModal = hideCreateProjectModal.bind(this);

    if (this.shouldShowCreateProjectModal(queryParams)) {
      this.props.showCreateProjectModal();
    } else {
      this.hideCreateProjectModal();
    }
  }

  /**
   * Get a string of query params with `create=1` added
   *
   * @return {String}
   */
  getQueryStringWithCreate() {
    const { queryParams } = this.props;
    const queryParamsWithCreate = Object.assign({}, queryParams, {
      create: 1,
    });

    return qs.stringify(queryParamsWithCreate, {arrayFormat: 'bracket'});
  }

  /**
   * Whether to show the create project modal
   *
   * @param {Object} queryParams
   * @return {Boolean}
   */
  shouldShowCreateProjectModal(queryParams = {}) {
    return !!(
      'create' in queryParams &&
      parseInt(queryParams.create, 10) === 1
    );
  }

  render() {
    return (
      <main className="ProjectsList">
        <div className="table">
          <header className="table-header">
            <h3 className='table-title'>Projects</h3>
            <div className="table-action">
              <Link className="button" to={{
                pathname: '/projects',
                search: this.state.queryStringWithCreate,
              }}>Create a new Project</Link>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {this.props.projects.map((project) => {
                const projectLink = `/projects/${project.id}`;

                return (
                  <tr key={project.id}>
                    <td>
                      <Link to={projectLink}>{project.title}</Link>
                    </td>
                    <td>
                      <Link to={projectLink}>{parseDate(project.createdAt)}</Link>
                    </td>
                    <td>
                      <Link to={projectLink}>{parseDate(project.updatedAt)}</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default withRouterAndQueryParsing(ProjectsList);
