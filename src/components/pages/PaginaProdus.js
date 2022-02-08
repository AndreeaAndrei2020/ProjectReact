import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap'
function PaginaProdus() {
    const location = useLocation()
    const  product  = location.state
    const style={
        width: '500px',
        height: 'auto',
        display:'flex',
        justifyContent:'center' 
    }
    const x={
        display:'flex',
        margin: '30px',
        justifyContent:'center' 
    }
    const f={
        textAlign: 'center'
    }
    console.log(product)
    return (
        <div style={x}>
             <Card style={style}>
                                       <Card.Img variant="top" src={product.src}  />                                                  
                                        <Card.Footer>
                                               <Card.Title style={f} > {product.title} </Card.Title> 
                                               <Card.Text style={f}  > - {product.text} -</Card.Text> 
                                               <Card.Text style={f}  > {product.pret} </Card.Text> 
                                        </Card.Footer>
                            </Card>
        </div>
    )
}

export default PaginaProdus
