import React from 'react'
import CardReteta from '../CardReteta';

import './ReteteCafea.css';
function ReteteCafea() {
  return (
    <div>
      <h1 className='h1Retete'>Retete de Cafea</h1>
               <CardReteta src="photos/EchipamentCafea12.jpg" path='/v60' titleText='V60' text= 'Ne place să preparăm cafea cu ajutorul V60 pentru că obținem întotdeauna o cafea cu arome clare și un gust delicat. Etapa 1. Pregătiri. Ai nevoie de: 15 gr cafea, 500 ml apă fierbinte filtratată, un dripper V60, filtrul de hârtie, cântar, timer, kettle pentru a turna apa constant și...'/> 
               <CardReteta src="photos/Chemex.jpg" path='/chemex' titleText='Chemex' text= 'Chemex-ul este metoda ideală pentru momentele când îți dorești să prepari îndeajuns de multă cafea, cât pentru întregul grup de prieteni. Vei obține un preparat cu note clare și corp delicat. Etapa 1. Pregătiri. Ai nevoie de 24 gr cafea, 500 ml apă fierbinte filtrată, filtru de hârtie, cântar, râșniță,...' />
               <CardReteta src='photos/Aeropress.jpg' path='/aeropress' titleText='Aeropress' text="Motivul pentru care ne place atât de mult Aeropress-ul se datorează corpolenței plăcute și texturii mătăsoase pe care o are cafeaua preparată cu acesta, În plus, este un instrument ușor de folosit și întreținut, pe care l-am lua cu noi chiar și pe vârful multelui. Etapa 1. Pregătiri.  15 gr..."   /> 
               <CardReteta src= 'photos/EchipamentCafea8.jpg' path='/syphon' titleText='Syphon' text='Atunci când ai nevoie de o dimineață plină de energie, Syphon este o metodă prin care poți obține o cafea cu mai multă cofeină decât cele obținute prin alte metode de preparare și cu o corpolență mai ridicată. Etapa 1. Pregătiri. Ai nevoie de 18 gr cafea, 300 ml apă...'/ >
    </div>
  )
}

export default ReteteCafea;

