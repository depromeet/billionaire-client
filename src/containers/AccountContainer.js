import { Account } from 'components';
import * as actions from 'actions/account';
import * as rankingActions from 'actions/ranking';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  accounts: state.accountReducer.accounts, 
  transactions: state.accountReducer.transactions,
  me: state.authReducer.me,
  ranking: state.rankingReducer.ranking
});

const mapDispatchToProps = (dispatch) => ({
  getAccountRequest: () => {
    dispatch(actions.getAccountRequest());
  },
  getRankingRequest: () => {
    dispatch(rankingActions.getRankingRequest());
  }
});

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);

export default AccountContainer;