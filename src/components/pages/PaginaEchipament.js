import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function PaginaEchipament() {
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
   
    console.log("hello ", product)
    return (
        <div style={x}>
                    <Card style={style}>
                                            <Card.Img variant="top" src={product.src}/>                                                  
                                            <Card.Footer>
                                                    <Card.Title className='textPret'> {product.title}</Card.Title> 
                                                  
                                                    <Card.Text className='textPret' >{product.pret} </Card.Text> 
                                            </Card.Footer>
                                </Card>
         </div>
    )
}

export default PaginaEchipament
