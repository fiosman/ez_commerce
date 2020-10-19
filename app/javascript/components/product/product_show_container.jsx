import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchSingleProduct } from "../../actions/product_actions";
import { selectProductReviews } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  productId: ownProps.match.params.productId,
  loadingProduct: state.loading.detail.product,
  productReviews: selectProductReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveSingleProduct: (productId) => dispatch(fetchSingleProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
