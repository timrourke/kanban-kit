import { connect } from 'react-redux';
import BoardsList from './../components/BoardsList';

const mapStateToProps = ({boards}) => ({
  boards,
});

const BoardsListContainer = connect(
  mapStateToProps,
  undefined
)(BoardsList);

export default BoardsListContainer;
