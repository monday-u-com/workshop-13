import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLoggedInUser, getIsBadPassword, getIsBadUser } from "../../app/selectors/auth-selectors";
import { logInAction } from "../../app/actions/login-actions";
import LoginComponent from "./login-component";

const mapStateToProps = (state, ownProps) => {
  const loggedInUserName = getLoggedInUser(state);
  const badPassword = getIsBadPassword(state);
  const badUser = getIsBadUser(state);
  return { loggedInUserName, badPassword, badUser };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // TODO bind logOutAction
  return bindActionCreators({ logInAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
