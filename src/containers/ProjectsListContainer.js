import { connect } from 'react-redux';
import ProjectsList from './../components/ProjectsList';

const mapStateToProps = ({projects}) => ({
  projects,
});

const ProjectsListContainer = connect(
  mapStateToProps,
  undefined
)(ProjectsList);

export default ProjectsListContainer;
