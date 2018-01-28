import { connect } from 'react-redux';
import ProjectsList from './../components/ProjectsList';
import {
  deleteProject,
} from './../actions/projects';
import {
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../actions/modals';

const mapStateToProps = ({modals, projects}) => ({
  modals,
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject(projectId) {
    dispatch(deleteProject(projectId));
  },
  hideCreateProjectModal() {
    dispatch(hideCreateProjectModal());
  },
  showCreateProjectModal() {
    dispatch(showCreateProjectModal());
  },
});

const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);

export default ProjectsListContainer;
