import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'
function Syphon() {
  return <div>
  <div className="SyphonCard">

<h1 style={{color:' acril '}}>Syphon</h1>

<Card className="text-center">

        <Card.Body className="text-center">
        <h2 className='titleH2'>ETAPA 1. PREGĂTIRI.</h2>
            <ListGroup variant="flush"  className="text-center">
                <ListGroup.Item className="text-center">Ai nevoie de 18 gr cafea, 300 ml apă fierbinte filtrată, setul de syphon, sursă de căldură (lampă cu ulei sau gaz), cântar, râșniță, paletă de bambus pentru amestecat și timer;</ListGroup.Item>
                <ListGroup.Item className="text-center">Pregătește syphon-­ul pentru preparare, cântărește 300 ml de apă fierbinte în bolul inferior și pune-l deasupra sursei de căldură;</ListGroup.Item>
                <ListGroup.Item className="text-center">Montează filtrul de hârtie, înșurubează filtrul metalic al syphon­ului fixându-l în partea superioară și umezește-l cu apă fierbinte;</ListGroup.Item>
                <ListGroup.Item className="text-center">Pune partea superioară peste bolul inferior și așteaptă să urce aproape toată apa (stai liniștit, mereu rămâne puțină apă jos);</ListGroup.Item>
                <ListGroup.Item className="text-center">Între timp, cântărește și macină cafeaua</ListGroup.Item>
            </ListGroup>  
        </Card.Body>

</Card>
<div className='bottom'>
<Card className="text-center">

<Card.Body className="text-center">
<h2  className='titleH2'>
    ETAPA 2. EXTRACȚIA.
    </h2>
        <ListGroup  className="text-center" variant="flush">
            <ListGroup.Item className="text-center">Când apa a urcat, adaugă cafeaua măcinată și pornește timer­ul;</ListGroup.Item>
            <ListGroup.Item className="text-center" >Folosește spatula pentru a te asigura că toată cafeaua s-­a umezit și este în contact cu apa;</ListGroup.Item>
            <ListGroup.Item className="text-center" >Așteaptă 30 de secunde și mai amestecă încă o dată, prin trei mișcări față­-spate ale spatulei, suficiente cât să creezi turbulențe în cafea;</ListGroup.Item>
            <ListGroup.Item className="text-center" >După 1 minut și 10 secunde, amestecă de 3 ori circular în cafea, folosind spatula, și îndepărtează sursa de căldură;</ListGroup.Item>
            <ListGroup.Item className="text-center" >Așteaptă până când toată cafeaua coboară în bolul inferior (zațul va forma o bulă în cel superior) și îți poți curăța echipamentul, pentru a lăsa un pic cafeaua să se mai răcească.</ListGroup.Item>
        </ListGroup>  
</Card.Body>

</Card>
</div>



</div>


  </div>;
}

export default Syphon;
