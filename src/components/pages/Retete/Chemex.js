import React from 'react';
import {Card, ListGroup} from 'react-bootstrap'
function Chemex() {
  return <div>


<div className="divChemex">

<h1 style={{color:' acril '}}>V60</h1>

<Card className="textChemex">

        <Card.Body className="textChemex">
        <h2 className='titleH2'>ETAPA 1. PREGĂTIRI.</h2>
            <ListGroup variant="flush"  className="textChemex">
                <ListGroup.Item className="textChemex">Ai nevoie de 24 gr cafea, 500 ml apă fierbinte filtrată, filtru de hârtie, cântar, râșniță, timer și kettle, pentru a turna apa constant.</ListGroup.Item>
                <ListGroup.Item className="textChemex">Pregătește apa caldă în kettle, apoi așteaptă un timp să se răcească puțin înainte de a o turna peste cafea</ListGroup.Item>
                <ListGroup.Item className="textChemex">Cântărește și macină cafeaua, apoi ia filtrul de hârtie și se pune-l în Chemex cu 3 părți de hârtie pe un perete și o parte pe celălalt perete;</ListGroup.Item>
                <ListGroup.Item className="textChemex">Spală filtrul cu apă fierbinte, pentru a încălzi Chemexul și pentru a înlătura gustul de hârtie;</ListGroup.Item>
                <ListGroup.Item className="textChemex">Aruncă apa din Chemex, pune-l pe cântar (nu uita să îl setezi la zero) și pune cafeaua măcinată în filtru</ListGroup.Item>
            </ListGroup>  
        </Card.Body>

</Card>
<div className='bottom'>
<Card className="textChemex">

<Card.Body className="textChemex">
<h2  className='titleH2'>
    ETAPA 2. EXTRACȚIA.
    </h2>
        <ListGroup  className="textChemex" variant="flush">
            <ListGroup.Item className="textChemex">Toarnă ușor, cu mișcări circulare, 48 ml apă, astfel încât să umezești toată cafeaua;</ListGroup.Item>
            <ListGroup.Item className="textChemex"> Blooming – așteaptă 30 de secunde, astfel încât cafeaua să poată elimina o parte din gaze;</ListGroup.Item>
            <ListGroup.Item className="textChemex" > Continuă să torni apa cu mișcări circulare, încercând să păstrezi un nivel constant, până când cântarul arată 400 ml. Întregul proces nu ar trebui să dureze mai mult de 2 minute.</ListGroup.Item>
            <ListGroup.Item className="textChemex" > Așteaptă să curgă cafeaua, fără să miști chemexul, aruncă filtrul de hârtie.</ListGroup.Item>
        </ListGroup>  
</Card.Body>

</Card>
</div>



</div>

    
  </div>;
}

export default Chemex;
