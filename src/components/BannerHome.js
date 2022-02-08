import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
export default function BannerHome() {
    return (
        <div>
            <div className='img-container'>  
            <div className="container-home">

                <p className='PStressed'>Stressed, blessed, and coffee obsessed</p>
               
            

                        <Link to="/shop">
                                    <Button variant="outline-light" size="lg">
                                        Visit our shop
                                    </Button>
                        </Link>
           </div>
        </div>
        </div>
    )
}
