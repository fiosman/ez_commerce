import React from "react";
import AdminNavBar from "../admin_dashboard/admin_nav_bar";
import LoadingSpinner from "../loading_spinner/loading_spinner";
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
      return <LoadingSpinner />;
    }
    return (
      <div className="admin-dash-container">
        <AdminNavBar />
      </div>
    );
  }
}

export default AdminDash;
