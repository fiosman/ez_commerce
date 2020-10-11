import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import AdminNavBar from "../admin_dashboard/admin_nav_bar";
import Stats from "../store_stats/stats";
class AdminDash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllCategories();
  }

  render() {
    const { loadingCategories, loadingProducts } = this.props;
    if (loadingCategories || loadingProducts) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <section>
          <h2>Admin Dashboard</h2>
          <GreetingContainer />
          <AdminNavBar />
          {/* <Stats /> */}
        </section>
      </div>
    );
  }
}

export default AdminDash;
