import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const AdminNavBar = () => {
  return (
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
          <Card.Text>
            <Link to="/admin/inventory">
              <Button variant="custom" className="btn-admin">
                Go to Inventory
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <FontAwesomeIcon className="upload-icon center" icon={faUpload} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Upload Products and Categories</Card.Title>
          <Card.Text>
            <Link to="/admin/product/new">
              <Button variant="custom" className="btn-admin">
                Add Product
              </Button>
            </Link>
            <Link to="/admin/category/new">
              <Button variant="custom" className="btn-admin">
                Add Category
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default AdminNavBar;
