import { connect } from 'react-redux';
import Modals from './../components/Modals';
import {
  showCreateBoardModal,
  hideCreateBoardModal,
  showCreateProjectModal,
  hideCreateProjectModal,
} from './../actions/modals';

const mapStateToProps = ({modals}) => ({
  modals,
});

const mapDispatchToProps = (dispatch) => ({
  showCreateBoardModal() {
    dispatch(showCreateBoardModal());
  },
  hideCreateBoardModal() {
    dispatch(hideCreateBoardModal());
  },
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
