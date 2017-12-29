import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouterAndQueryParsing from './withRouterAndQueryParsing';
import qs from 'query-string';

class ProjectsList extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   * @param {Object} props.queryParams
   */
  constructor({queryParams}) {
    super(...arguments);

    if (this.shouldShowCreateProjectModal(queryParams)) {
      this.props.showCreateProjectModal();
    } else {
      this.hideCreateProjectModal();
    }
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

  /**
   * Hide the create project modal
   */
  hideCreateProjectModal() {
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

    this.props.hideCreateProjectModal();
    this.props.history.push(`/projects?${encodedQueryParams}`);
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
                search: '?create=1'
              }}>Create a new Project</Link>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Created At</th>
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
                      <Link to={projectLink}>{project.createdAt.toLocaleString()}</Link>
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
