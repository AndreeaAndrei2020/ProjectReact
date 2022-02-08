import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup} from 'react-bootstrap'
import ShopCard from './ShopCard';

const listaProduse1 = [
    {
      id: 1,
      src: "/photos/Ceai1.jpg",
      pret: "40lei ",
      text: "goji, afine, căpșuni",
      title: "GREEN TEA GOJI & HAVTORN"
    },
    {
      id: 2,
      src: "/photos/Ceai4.jpg",
      pret: "30lei ",
      text: "relaxant, rotund, confortabil",
      title: "CAMOMILLA"
    },
  
    {
      id: 3,
      src: "/photos/Ceai3.jpg",
      pret: "35lei ",
      text: "catifelat, caramelizat, corpolent",
      title: "BLACK TEA MORS LILLA"
    }
  ];
  const listaProduse2 = [
    {
      id: 1,
      src: "/photos/Ceai6.jpg",
      pret: "30lei ",
      text: "catifelat, subtil, ușor citric și delicat",
      title: "BLACK TEA STUDIO 54"
    },
    {
      id: 2,
      src: "/photos/Ceai5.jpg",
      pret: "20lei ",
      text: "delicat, subtil, marin",
      title: "GREEN TEA ORGANIC SENCHA"
    },
  
    {
      id: 3,
      src: "/photos/Ceai7.jpg",
      pret: "25lei ",
      text: "dulce-acrișor, citric, răcoritor",
      title: "APELSIN & MINT"
    }
  ];
export default function ShopCeai() {
   
    return (
        <div>
        <h1>Shop </h1>
        <CardGroup>                   
        {listaProduse2.map((produs) => (
          <ShopCard
            path={"/produs" + "/" + produs.id}
            src={produs.src}
            pret={produs.pret}
            text={produs.text}
            title={produs.title}
          />
        ))}

                                      
        </CardGroup>
        <CardGroup>
                    
        {listaProduse1.map((produs) => (
          <ShopCard
            path={"/produs" + "/" + produs.id}
            src={produs.src}
            pret={produs.pret}
            text={produs.text}
            title={produs.title}
          />
        ))}
                    
                  
        </CardGroup>
       
      
    </div>
    )
}
