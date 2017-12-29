import { connect } from 'react-redux';
import CreateProjectModal from './../../components/modals/CreateProjectModal';
import {
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../../actions/modals';

const mapStateToProps = ({modals}) => ({
  modals,
});

const mapDispatchToProps = (dispatch) => ({
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
