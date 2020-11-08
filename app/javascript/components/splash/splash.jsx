import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import ProductListContainer from "../product/product_list_container";

// const Splash = () => (
//   <div>
//     <GreetingContainer />
//     <ProductListContainer />
//   </div>
// );

// export default Splash;

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div>
        <GreetingContainer />
        <ProductListContainer />
      </div>
    );
  }
}

export default Splash;
