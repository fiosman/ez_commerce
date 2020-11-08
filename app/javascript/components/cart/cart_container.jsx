import Cart from "./cart";
import { grabItems, pullCart } from "../../actions/cart_actions";
import { connect } from "react-redux";
import { selectLineItemIds } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  const lineItems = state.entities.lineItems;
  const lineItemIds =
    state.entities.cart[Object.keys(state.entities.cart)[0]].lineItemIds;

  return {
    selectedLineItems: selectLineItemIds(lineItemIds, lineItems),
    products: state.entities.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
  getAllLineItems: () => dispatch(grabItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
