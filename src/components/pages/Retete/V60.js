import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import './Retete.css'
export default function V60() {
    return (
    <div className="bgIMG">

                <h1 style={{color:' acril '}}>V60</h1>
          
    <Card className="text-center">
               
                        <Card.Body className="text-center">
                        <h2 className='titleH2'>ETAPA 1. PREGĂTIRI.</h2>
                            <ListGroup variant="flush"  className="text-center">
                                <ListGroup.Item className="text-center">Ai nevoie de: 15 gr cafea, 500 ml apă fierbinte filtratată, un dripper V60, filtrul de hârtie, cântar, timer, kettle pentru a turna apa constant și un server de cafea;</ListGroup.Item>
                                <ListGroup.Item className="text-center"> Fierbe apa filtrată, atât pentru prepararea cafelei, cât și pentru spălarea filtrului de hârtie;</ListGroup.Item>
                                <ListGroup.Item className="text-center">Între timp, cântărește și râșnește cafeaua;</ListGroup.Item>
                                <ListGroup.Item className="text-center">Pune filtrul de hârtie în conul de V60, peste un server de cafea și umezește-l cu apă fierbinte. În felul acesta încălzești și server­ul;</ListGroup.Item>
                                <ListGroup.Item className="text-center">Aruncă apa din server, pune-l pe cântar (nu uita să îl setezi la zero) și pune cafeaua măcinată în filtrul V60.</ListGroup.Item>
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
                            <ListGroup.Item className="text-center">Pornește timer-ul și umezește cafeaua măcinată, turnând 30 ml de apă prin mișcări circulare. În prepararea cafelei cu ajutorul V60, este important ca apa să nu atingă peretele de hârtie al filtrului;</ListGroup.Item>
                            <ListGroup.Item className="text-center" >Blooming – așteaptă 30 de secunde, astfel încât cafeaua să poată elimina o parte din gaze;</ListGroup.Item>
                            <ListGroup.Item className="text-center" >Continuă să torni apa încet, cu mișcări circulare, încercând să păstrezi un nivel constant, până când cântarul va arăta 250 ml. Întregul proces nu ar trebui să dureze mai mult de 2 minute;</ListGroup.Item>
                            <ListGroup.Item className="text-center" >  Așteaptă să curgă cafeaua, fără să miști server­ul, iar după ce în filtru rămâne doar zațul, îndepărtează conul definitiv și poți să te bucuri de cafea.</ListGroup.Item>
                        </ListGroup>  
               </Card.Body>

   </Card>
   </div>
            
            
 
    </div>
    )
}
