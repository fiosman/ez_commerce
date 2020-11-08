import Cart from "./cart";
import { pullCart } from "../../actions/cart_actions";
import { grabItems, removeLineItem } from "../../actions/line_item_actions";
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
  getAllLineItems: () => dispatch(grabItems()),
  removeCartItem: (itemId) => dispatch(removeLineItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
