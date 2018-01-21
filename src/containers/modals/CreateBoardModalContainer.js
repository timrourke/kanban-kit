import { connect } from 'react-redux';
import CreateBoardModal from './../../components/Modals/CreateBoardModal';
import {
  showCreateBoardModal,
  hideCreateBoardModal,
} from './../../actions/modals';
import {
  createBoard,
  createBoardWithColumnsAndRow,
} from './../../actions/boards';

const mapStateToProps = ({modals}) => ({
  modals,
});

const mapDispatchToProps = (dispatch) => ({
  createBoard(project, title) {
    dispatch(createBoard(project, title));
  },
  createBoardWithColumnsAndRow(project, title, columnTitles) {
    dispatch(createBoardWithColumnsAndRow(project, title, columnTitles));
  },
  showCreateBoardModal(projectId) {
    dispatch(showCreateBoardModal(projectId));
  },
  hideCreateBoardModal() {
    dispatch(hideCreateBoardModal());
  },
});

const CreateBoardModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoardModal);

export default CreateBoardModalContainer;
