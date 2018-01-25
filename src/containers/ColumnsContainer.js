import { connect } from 'react-redux';
import Columns from './../components/Columns';
import {
  createCard,
} from './../actions/cards';

const mapDispatchToProps = (dispatch) => ({
  createCard(column, row, title) {
    dispatch(createCard(column, row, title));
  },
});

const ColumnsContainer = connect(
  undefined,
  mapDispatchToProps,
)(Columns);

export default ColumnsContainer;
