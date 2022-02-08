import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function CardReteta(props) {
    return (
        <div>
              <Link to={props.path} >
             <Card className='CardItem'>
                      <Card.Img variant="top" src={props.src} className='ImgCard' />
                      <Card.Body>
                        <Card.Title>{props.titleText}</Card.Title>
                        <Card.Text>
                        {props.text}
                        </Card.Text>
                        <Button className='buttonRead' variant="primary">Read more..</Button>
                      </Card.Body>
                </Card>
                </Link>
        </div>
    )
}

export default CardReteta
