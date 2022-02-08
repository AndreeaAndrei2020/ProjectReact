import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ShopCafeaCard(props) {
  return (
    <div>
   <Link to={props.path} state={props}>
        <Col>
          <Card>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
              <Card.Title className="textPret"> {props.title}</Card.Title>
              <Card.Text className="textPret">{props.text}</Card.Text>
              <Card.Text className="textPret">{props.pret}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Link>
    </div>
  );
}

export default ShopCafeaCard;
