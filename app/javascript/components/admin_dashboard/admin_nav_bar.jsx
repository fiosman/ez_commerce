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
          <FontAwesomeIcon className="inventory-icon" icon={faWarehouse} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <FontAwesomeIcon className="upload-icon" icon={faUpload} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default AdminNavBar;
