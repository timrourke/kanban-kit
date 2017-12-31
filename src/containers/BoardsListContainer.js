import { connect } from 'react-redux';
import BoardsList from './../components/BoardsList';
import {
  showCreateBoardModal,
  hideCreateBoardModal,
} from './../actions/modals';

const mapStateToProps = ({boards}) => ({
  boards,
});

const mapDispatchToProps = (dispatch) => ({
  showCreateBoardModal(projectId) {
    dispatch(showCreateBoardModal(projectId));
  },
  hideCreateBoardModal() {
    dispatch(hideCreateBoardModal());
  },
});

const BoardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardsList);

export default BoardsListContainer;
