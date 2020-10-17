import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { postReview } from "../../util/review_api_util";

const mapStateToProps = (state, ownProps) => ({
  productId: ownProps.match.params.productId,
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (reviewData, productId) =>
    dispatch(postReview(reviewData, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
