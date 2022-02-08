import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (


        <div>
            <div className="row">         
                             <CardItem src="photos/CursBarista.jpg" alt="merge" text="Curs barista" path="/curs"/>                                     
                             <CardItem src="photos/EchipamentCafea3.jpg" alt="merge" text="Echipamente pentru acasa" path="/echipamenteCafea"/>                                             
                             <CardItem src="photos/RetetaAcasa.jpg" alt="merge" text="Retete de cafea" path="/reteteCafea"/>                                           
                             <CardItem src="photos/Ceai.jpg" alt="merge" text="Ceai" path="/ceai"/>                     
            </div>
        </div>
     
    )
}


export default Cards;