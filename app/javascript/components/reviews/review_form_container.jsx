import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { addReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => ({
  productId: ownProps.product.id,
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (reviewData) => dispatch(addReview(reviewData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
