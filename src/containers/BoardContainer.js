import { connect } from 'react-redux';
import Board from './../components/Board';
//import {
//  showCreateBoardModal,
//  hideCreateBoardModal,
//} from './../actions/modals';

const mapStateToProps = ({columns, rows}) => ({
  columns,
  rows,
});

const BoardContainer = connect(
  mapStateToProps,
  //  mapDispatchToProps,
)(Board);

export default BoardContainer;
