import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import UploadProductIcon from "../../../assets/images/admin-icon/upload-product.png";
import InventoryIcon from "../../../assets/images/admin-icon/inventory.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const AdminNavBar = () => {
  return (
    // <nav>
    //   <NavLink to="/admin/product/new">Add Product </NavLink>
    //   <NavLink to="/admin/inventory">Inventory </NavLink>
    //   <NavLink to="/">Home </NavLink>
    //   <NavLink to="/admin">Admin Dashboard</NavLink>
    //   <NavLink to="/admin/category/new">Add Category </NavLink>
    // </nav>
    <CardDeck>
      <Card>
        <Card.Header>
          <FontAwesomeIcon
            className="inventory-icon center"
            icon={faWarehouse}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>Manage Store Inventory</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <FontAwesomeIcon className="upload-icon center" icon={faUpload} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Upload Products and Categories</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default AdminNavBar;
