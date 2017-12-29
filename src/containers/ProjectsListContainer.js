import { connect } from 'react-redux';
import ProjectsList from './../components/ProjectsList';
import {
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../actions/modals';

const mapStateToProps = ({modals, projects}) => ({
  modals,
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  showCreateProjectModal() {
    dispatch(showCreateProjectModal());
  },
  hideCreateProjectModal() {
    dispatch(hideCreateProjectModal());
  },
});

const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);

export default ProjectsListContainer;
