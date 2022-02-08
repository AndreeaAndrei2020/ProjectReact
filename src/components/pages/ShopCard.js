import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ShopCard(props) {


    const mystyle = {
       height: 'auto',
        margin: "15px"
      };
      const titleStyle={
          textAlign: "center",
          textDecoration: 'underline !important' ,
          color: 'red'
      }
  
    return (

        <>
                
                            <Card style={mystyle}>
                                        <Link to={props.path} state={props}><Card.Img variant="top" src={props.src}  /> </Link>                                                     
                                        <Card.Footer>
                                                <Link to={props.path}><Card.Text  style={titleStyle}> {props.title} </Card.Text> </Link> 
                                                <Card.Text  style={titleStyle}> {props.text} </Card.Text>
                                        </Card.Footer>
                            </Card>
                           
        </>
    )
}

export default ShopCard
