import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectsList extends Component {
  render() {
    return (
      <div className="ProjectsList">
        <header className="ProjectsList-header">
          <h3>Projects</h3>
        </header>
        <ul>
          {this.props.projects.map((project) => {
            const projectLink = `/projects/${project.id}`;

            return (
              <li key={project.id}>
                <Link to={projectLink}>{project.title}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/projects/create">Create a new project</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectsList;
