import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import { Row } from "react-bootstrap";

import EchipamenteCafeaCard from './EchipamenteCafeaCard';

const listaProduse = [
    {
      id: 1,
      src: "/photos/EchipamentCafea1.jpg",
      pret: "29.600lei ",
      text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
      title: "ESPRESSOR PRIMA",          
    },
    {
        id: 2,
        src: "/photos/EchipamentCafea2.jpg",
        pret: "200lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "MĂCINĂTOR CAFEA ATOM",          
      },
      {
        id: 3,
        src: "/photos/EchipamentCafea3.jpg",
        pret: "50.000 lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "ESPRESSOR MUSICA",          
      },
      {
        id: 4,
        src: "/photos/EchipamentCafea4.jpg",
        pret: "50lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "LATIERA",          
      },
       {
        id: 5,
        src: "/photos/EchipamentCafea5.jpg",
        pret: "250lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "CAFETIERA",          
      }
      ,
      {
       id: 6,
       src: "/photos/EchipamentCafea6.jpg",
       pret: "80lei ",
       text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
       title: "FRENCH PRESS",          
     }
     ,
    
       {
        id: 8,
        src: "/photos/EchipamentCafea8.jpg",
        pret: "50lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "SYPHON",          
      }
      ,
       {
        id: 9,
        src: "/photos/EchipamentCafea9.jpg",
        pret: "50lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "TERMOMETRU",          
      }
      ,
       {
        id:10,
        src: "/photos/EchipamentCafea10.jpg",
        pret: "50lei ",
        text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
        title: "V60",          
      }
      
  ];
  
function CursBarista() {
    return (
        <div>
            <h1>
        Echipamente Cafea
            </h1>

            <Row xs={1} md={2} className="g-4">
                          
                    {listaProduse.map((produs) => (
                        <EchipamenteCafeaCard
                            path={'/echipamentCafea' + '/' + produs.id}
                            src={produs.src}
                            pret={produs.pret}
                            text={produs.text}
                            title={produs.title}
                            p1={produs.p1}
                            durata={produs.durata}
                            grup={produs.grup}
                            locatie={produs.locatie}
                        />
                        ))}
   
            </Row>
        </div>
    )
}

export default CursBarista
