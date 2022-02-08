import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import { Row } from "react-bootstrap";
import CursBaristaCard from './CursBaristaCard';

const listaProduse = [
    {
      id: 1,
      src: "/photos/CursIntroduction.jpg",
      pret: "50lei ",
      p1: "Introduction To Coffee este cursul introductiv din Coffee Skills Program, unul din cele 3 programe certificate internațional de Specialty Coffee Association (SCA) pentru educație în domeniul cafelei de specialitate. Coffee Skills Program este alcătuit din acest curs introductiv și 5 module: Barista, Brewing, Green Coffee, Roasting și Sensory Skills. Origo Academy este acreditată de SCA prin traineri AST pentru a organiza cursurile și oferă posibilitatea de certificare în urma examinării, la finalul cursurilor. Prin Introduction To Coffee dobândești o bază teoretică solidă în domeniul cafelei de specialitate. Fie că ești un pasionat de cafea curios să afle mai multe sau vrei să îți creezi o carieră în domeniu, prin Introduction To Coffee îți mapezi drumul cafelei de la plantă la ceașcă. Povestim despre origini, despre istorie, înlăturăm miturile, gustăm diferite origini și intrăm în zona tehnică cu o scurtă prezentare a metodelor alternative de preparare a cafelei și factorii care pot influența extracția. Cu experiență de 8 ani de educație în cafea, la Origo Academy suntem entuziaști să îți ghidăm drumul în domeniu. La finalul cursului SCA Introduction To Coffee vei avea perspectivă asupra următorilor tăi pași în educația în cafeaua de specialitate. O să știi ce informații să urmărești atunci când alegi o cafea și fiecare ceașcă va deveni o ocazie de a descoperi și de a învăța ceva nou.",
      text: "curs pentru barista începători și pasionați, 6 ore | 4 - 6 locuri",
      title: "INTRODUCTION TO COFFEE",
      durata: 'Durată: 6 ore',
      grup: 'Grupă: 4-6 cursanți',
      locatie: 'Locație: LatteToGo Academy, Strada Arcului nr. 14B, București'
      
    },
    {
      id: 2,
      src: "/photos/CursEspresso.jpg",    
      p1 : "După 8 ani de experiență de educație în cafeaua de specialitate răspundem în mod creativ nevoii de cunoaștere a pasionaților de cafea, care nu lucrează în domeniu. La Origo Academy am creat un spațiu deschis curiozității și dedicat transferului de cunoștințe prin experiențe practice și senzoriale. Espresso Orientation este unul din seria de cursuri dedicate amatorilor de cafea, întâlniri în care aducem la aceeași masă curiozitățile pasionaților de cafea și cunoștințele echipei noastre.    Agenda:  Introducere cu informații și curiozități rapide din domeniul cafelei de specialitate, cum se reflectă originea, varietatea și procesarea unei cafele în profilul de gust, care sunt condițiile de păstrare și depozitare pentru cafea, cum citim data de prăjire și termenul de valabilitate la cafea, Preparare espresso,  cei mai importanți pași în prepararea unui espresso, calibrarea râșniței și setarea rețetei unui espresso, rutina care ne ajută să avem constanță în prepararea unui espresso, indicatorii care afecteaza negativ calitatea unui espresso - tampare incorectă, cum se creează efectul de channeling. Evaluarea unui espresso – miros, textură, aciditate, gust, post gust.      îngrijirea și curățarea aparatelor de cafea, Introducere pentru tehnica de latte art, texturarea corectă a laptelui , turnare , tehnica contrastului între elementul de desen în lapte și baza de espresso",

      pret: "60lei ",
      text: "curs practic, 4 ore | 4 - 6 locuri",
      title: "ESPRESSO ORIENTATION",
      durata: 'Durată: 4 ore',
      grup: 'Grupă: 4-6 persoane',
      locatie: 'Locație: LatteToGo Academy, Strada Arcului nr. 14B, București'
    },
  
    {
      id: 3,
      src: "/photos/CursBrewing.jpg",  
        p1 : "După 8 ani de experiență de educație în cafeaua de specialitate răspundem în mod creativ nevoii de cunoaștere a pasionaților de cafea, care nu lucrează în domeniu. La Origo Academy am creat un spațiu deschis curiozității și dedicat transferului de cunoștințe prin experiențe practice și senzoriale. Brewing Orientation este unul din seria de cursuri dedicate amatorilor de cafea, întâlniri în care aducem la aceeași masă curiozitățile pasionaților de cafea și cunoștințele echipei noastre.Introducere cu informații și curiozități rapide din domeniul cafelei de specialitate: cum se reflectă originea, varietatea și procesarea unei cafele în profilul de gust, care sunt condițiile de păstrare și depozitare pentru cafea, cum citim data de prăjire și termenul de valabilitate la cafea, Preparare filtru , discutarea metodelor alternative de preparare a cafelei și a diferențele între ele – imersie totală vs pour over.  , rutina și ustensilele care ne ajută să avem constanță în prepararea unui filtru    , explicarea și explorarea factorilor care influențează extracția cafelei: gradul de măcinare, temperatura apei, timp de expunere apă și cafea, agitație, rețete",
      text: "curs practic, 4 ore | 4 - 6 locuri",
      title: "BREWING ORIENTATION",
      durata: 'Durată: 4 ore',
      grup: 'Grupă: 4-6 persoane',
      locatie: 'Locație: LatteToGo Academy, Strada Arcului nr. 14B, București'
    },
  
    {
      id: 3,
      src: "/photos/CursSensory.jpg",    
      p1: "După 8 ani de experiență de educație în cafeaua de specialitate răspundem în mod creativ nevoii de cunoaștere a pasionaților de cafea, care nu lucrează în domeniu. La Origo Academy am creat un spațiu deschis curiozității și dedicat transferului de cunoștințe prin experiențe practice și senzoriale. Sensory Orientation este unul din seria de cursuri dedicate amatorilor de cafea, întâlniri în care aducem la aceeași masă curiozitățile pasionaților de cafea și cunoștințele echipei noastre. Agenda:  definirea simțurilor pe care le folosim în analiza senzorială a cafelei – văz, gust, miros, auz, simț tactil     , exersarea simțului gustativ – explorarea practică a celor 5 gusturi (sărat, acru, dulce, amar, umami), cum se reflectă în cafea și cum se dezvoltă în băuturi; dezvoltarea conceptului de aciditate în cafea.    , exersarea simțului tactil – explorarea practică a texturilor, degustare de cafea procesată natural vs procesată prin spălare     , exersarea simțului olfactiv – explorarea practică a aromei și cum ne ajută mirosul să identificam profilul aromatic din cafea, exersarea legăturii strânse între gust și miros, dezvoltarea vocabularului necesar în descrierea unei cești de cafea și a elementelor ce o compun. După întâlnirea la Sensory Orientation în care explicăm, explorăm și ne bucurăm de știința și exercițiul evaluării senzoriale în cafea, vei stăpâni conceptele și limbajul de bază care să îți permită să descrii ce simți într-o ceașcă de cafea. Fiecare ceașcă de cafea după acest curs devine un prilej de a exersa și de a conversa alături de pasionați și profesioniști din cafea.",
      pret: "55lei ",
      text: "cultura și știința cafelei într-un curs practic | 5 ore | 4 - 6 locuri",
      title: "SENSORY ORIENTATION",
      durata: 'Durată: 4 ore',
      grup: 'Grupă: 4-6 persoane',
      locatie: 'Locație: LatteToGo Academy, Strada Arcului nr. 14B, București'
    }
  ];
  
function CursBarista() {
    return (
        <div>
            <h1>
           Cursuri barista
            </h1>

            <Row xs={1} md={2} className="g-4">
                          
                    {listaProduse.map((produs) => (
                        <CursBaristaCard 
                            path={'/cursBarista' + '/' + produs.id}
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
