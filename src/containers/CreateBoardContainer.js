import { connect } from 'react-redux';
import CreateBoard from './../components/CreateBoard';
import {
  createBoard,
} from './../actions/index';

const mapDispatchToProps = (dispatch) => ({
  createBoard(project, title) {
    dispatch(createBoard(project, title));
  },
});

const CreateBoardContainer = connect(
  undefined,
  mapDispatchToProps
)(CreateBoard);

export default CreateBoardContainer;
