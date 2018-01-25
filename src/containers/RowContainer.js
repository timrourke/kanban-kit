import { connect } from 'react-redux';
import Row from './../components/Row';
import {
  updateRow,
} from './../actions/rows';

const mapStateToProps = ({boards, cards, rows}) => ({
  boards,
  cards,
  rows,
});

const mapDispatchToProps = (dispatch) => ({
  updateRow(id, board, order, title) {
    dispatch(updateRow(id, board, order, title));
  },
});

const RowContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Row);

export default RowContainer;
