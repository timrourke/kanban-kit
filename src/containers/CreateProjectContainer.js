import { connect } from 'react-redux';
import CreateProject from './../components/CreateProject';
import {
  createProject,
} from './../actions/projects';

const mapDispatchToProps = (dispatch) => ({
  createProject(title) {
    dispatch(createProject(title));
  },
});

const CreateProjectContainer = connect(
  undefined,
  mapDispatchToProps
)(CreateProject);

export default CreateProjectContainer;
