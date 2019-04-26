import { Product } from 'components';
import * as actions from 'actions/product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
  state.productReducer
);

const mapDispatchToProps = (dispatch) => ({
  getProductRequest: () => {
    dispatch(actions.getProductRequest());
  },
  getProductDetailRequest: (id) => {
    dispatch(actions.getProductDetailRequest(id));
  },
  joinProductRequest: (id) => {
    dispatch(actions.joinProductRequest(id));
  },
  getAirPollutionRequest: () => {
    return new Promise((resolve, reject) => {
      dispatch(actions.getAirPollutionRequest()).then(() => {
        console.log('done0');
        resolve();
      }).catch(() => {
        reject();
      });
    });
  },
  getKakaotalkRequest: () => {
    dispatch(actions.getKakaotalkRequest());
  },
  getDpmSessionRequest: () => {
    dispatch(actions.getDpmSessionRequest());
  },
});

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default ProductContainer;