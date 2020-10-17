import { connect } from "react-redux";
import ProductShow from "./product_show";

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
