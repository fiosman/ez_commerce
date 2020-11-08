import Cart from "./cart";
import {
  grabItems,
  modifyLineItem,
  removeLineItem,
} from "../../actions/line_item_actions";
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
  updateCartItem: (item) => dispatch(modifyLineItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
