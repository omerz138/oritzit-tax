import React from "react";
import { Card } from "react-bootstrap";
import "./Main.css";
const Main = (props) => {
  return (
    <div className="card-container">
      <Card className="card-text">
        <Card.Body> {props.children}</Card.Body>
      </Card>
    </div>
  );
};

export default Main;
