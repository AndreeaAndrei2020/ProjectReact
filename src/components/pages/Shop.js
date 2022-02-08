import React from 'react'
import {CardGroup} from 'react-bootstrap'
import ShopCard from './ShopCard'
function Shop() {

    return (
        <div>
            <h1>Shop </h1>
            <CardGroup>
                        
                        <ShopCard src="photos/ShopCafea7.jpg" title='Cafea' path='/cafea'/>                                              
                        <ShopCard src="photos/EchipamenteCafea.jpg" title=" Echipamente cafea "  path='/echipamenteCafea' />                      
                        <ShopCard src="photos/ShopCeai3.jpg" title= 'Ceai'   path='/ceai'/>
                      
            </CardGroup>
        </div>
    )
}

export default Shop
