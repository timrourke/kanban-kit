import { connect } from 'react-redux';
import Modals from './../components/Modals';
import {
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../actions/modals';

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

const ModalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);

export default ModalsContainer;
