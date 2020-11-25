import Cart from "./cart";
import {
  grabItems,
  modifyLineItem,
  removeLineItem,
} from "../../actions/line_item_actions";
import { connect } from "react-redux";
import { selectLineItemIds } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  const products = state.entities.products;

  return {
    selectedLineItems: selectLineItemIds(state),
    products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllLineItems: () => dispatch(grabItems()),
  removeCartItem: (itemId) => dispatch(removeLineItem(itemId)),
  updateCartItem: (item) => dispatch(modifyLineItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
