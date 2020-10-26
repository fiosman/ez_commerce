import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { addReview, removeReviewErrors } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => ({
  productId: ownProps.product.id,
  errors: state.errors.review,
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (reviewData) => dispatch(addReview(reviewData)),
  clearErrors: () => dispatch(removeReviewErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
