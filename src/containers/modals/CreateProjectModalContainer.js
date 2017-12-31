import { connect } from 'react-redux';
import CreateProjectModal from './../../components/Modals/CreateProjectModal';
import {
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../../actions/modals';
import {
  createProject,
} from './../../actions/projects';

const mapStateToProps = ({modals}) => ({
  modals,
});

const mapDispatchToProps = (dispatch) => ({
  createProject(title) {
    dispatch(createProject(title));
  },
  showCreateProjectModal() {
    dispatch(showCreateProjectModal());
  },
  hideCreateProjectModal() {
    dispatch(hideCreateProjectModal());
  },
});

const CreateProjectModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectModal);

export default CreateProjectModalContainer;
