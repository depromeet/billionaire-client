import { AccountDetail } from 'components';
import * as actions from 'actions/account';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ...state.accountReducer
});

const mapDispatchToProps = (dispatch) => ({
  getTransactionRequest: (id) => {
    dispatch(actions.getTransactionRequest(id));
  },
});

const AccountDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetail);

export default AccountDetailContainer;