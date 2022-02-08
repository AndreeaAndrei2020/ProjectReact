import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function PaginaCurs() {
    const location = useLocation()
    const  product  = location.state
 
    
    console.log("hello ", product)
    return (
        <div >
           
        <Card className="text-center">
             
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.p1}  
                    </Card.Text>
               
                    <Card.Text>
                    {product.durata}
                 
                    </Card.Text>
                    <Card.Text>
                    {product.grup}
                 
                    </Card.Text>
                    <Card.Text>
                    {product.locatie}             
                    </Card.Text>

                    
                </Card.Body>
               
                </Card>
          
        </div>
    )
}

export default PaginaCurs
