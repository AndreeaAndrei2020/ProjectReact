import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import './Retete.css'
function Aeropress() {
    return (
        <div className="AeropressCard">

        <h1 style={{color:' acril '}}>Aeropress</h1>
  
<Card className="textAeropress">
       
                <Card.Body className="textAeropress">
                <h2 className='titleH2Aeropress'>ETAPA 1. PREGĂTIRI.</h2>
                    <ListGroup variant="flush"  className="textAeropress">
                        <ListGroup.Item className="textAeropress">15 gr de cafea proaspăt prăjită, 250 ml apă fierbinte filtrată, cântar, timer, filtrul de hârtie pentru aeropress, o râșniță;</ListGroup.Item>
                        <ListGroup.Item className="textAeropress">Pune apa filtrată la fiert și las-o puțin timp să se răcească, înainte să începi să o torni peste cafea. În felul acesta, nu vei risca să „arzi” sau să supraextragi cafeaua;</ListGroup.Item>
                        <ListGroup.Item className="textAeropress">Montează aeropress­ul, pune filtrul de hârtie în capacul aeropress­ului și umezește­l și pe el cu apă, pentru a înlătura gustul de hârtie.
</ListGroup.Item>
                       
                    </ListGroup>  
                </Card.Body>

</Card>
<div className='bottom'>
<Card className="textAeropress">
       
       <Card.Body className="textAeropress">
       <h2  className='titleH2Aeropress'>
            ETAPA 2. EXTRACȚIA.
            </h2>
                <ListGroup  className="textAeropress" variant="flush">
                    <ListGroup.Item className="textAeropress">Macină puțin mai gros cele 15 gr de cafea boabe. Iar dacă ai cafea gata măcinată și nu ai cântar, poți să măsori cam două linguri și jumătate</ListGroup.Item>
                    <ListGroup.Item className="textAeropress" >Pornește timer­ul și toarnă apă 3/4 din aeropress (până la cifra 2) și folosește spatula să amesteci, pentru a te asigura că toată cafeaua este în contact cu apa (ar trebui să nu dureze mai mult de 20­30 de secunde); </ListGroup.Item>
                    <ListGroup.Item className="textAeropress" >Umple apoi aeropress­ul de apă (până la 250 ml) si Înfiletează filtrul;</ListGroup.Item>
                    <ListGroup.Item className="textAeropress" >La 1 min și 10 secunde, răstoarnă aeropress­ul peste cană sau server­ul de cafea și presează până curge toată apa;</ListGroup.Item>

                    </ListGroup>  
                    <ListGroup className='textAeropress' >
                    Acum poți să cureți aeropress­ul și să te bucuri de cafea, în ce ordine prefer.</ListGroup>
       </Card.Body>

</Card>
</div>
    
    

</div>
    )
}

export default Aeropress
