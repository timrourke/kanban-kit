import { connect } from 'react-redux';
import AppHeader from './../components/AppHeader';

const mapStateToProps = (state) => ({
  ...state,
});

const AppHeaderContainer = connect(
  mapStateToProps,
  undefined
)(AppHeader);

export default AppHeaderContainer;
