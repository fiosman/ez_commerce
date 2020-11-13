import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchSingleProduct } from "../../actions/product_actions";
import { selectProductReviews } from "../../reducers/selectors";

export const mapStateToProps = (state, ownProps) => {
  const product = state.entities.products[ownProps.match.params.productId];
  const productId = ownProps.match.params.productId;
  const loadingProduct = state.loading.detail.product;
  const loadingReviews = state.loading.detail.reviews;
  const productReviews = state.entities.reviews;
  return {
    product: product,
    productId: productId,
    loadingProduct: loadingProduct,
    loadingReviews: loadingReviews,
    productReviews: selectProductReviews(productReviews, product),
    avgRating: product.average_rating,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  receiveSingleProduct: (productId) => dispatch(fetchSingleProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
