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
  }
});

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default ProductContainer;