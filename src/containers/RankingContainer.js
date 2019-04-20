import { Ranking } from 'components';
import * as actions from 'actions/ranking';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  me: state.authReducer.me,
  ranking: state.rankingReducer.ranking
});

const mapDispatchToProps = (dispatch) => ({
  getRankingRequest: () => {
    dispatch(actions.getRankingRequest());
  }
});

const RankingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ranking);

export default RankingContainer;