import React from 'react'
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const a={
    width: '324px',
    hight:'160px',
  margin: 'auto'
}
const b={
    textAlign: 'center',
    textDecoration: 'none'
    
}

function EchipamenteCafeaCard(props) {
    return (
        <div>
        <Link to={props.path} state={props}>
                <Col>
                    <Card>
                            <Card.Img variant="top" style={a} src={props.src} />
                            <Card.Body>
                                <Card.Title style={b}>{props.title}</Card.Title>
                                <Card.Text style={b}> {props.pret}</Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Link>
        </div>
    )
}

export default EchipamenteCafeaCard
