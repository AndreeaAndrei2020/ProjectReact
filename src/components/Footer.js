import React from 'react'
import './Footer.css'


import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



function Footer() {


  const mystyleLink = {
    textDecoration: 'none'
 
  };
  return (
    <div>
     <div className="footer">
        <div className="contain">

                <div className="col">
                        <h1>Info</h1>
                        <ul>
                          <li><Link to='/contact' style={mystyleLink}>Contact</Link></li>
                          <li><Link to='/livrare' style={mystyleLink}>Livrare</Link></li>
                          <li><Link to='/cariere' style={mystyleLink}>Cariere</Link></li>
                        </ul>
                </div>
                
                <div className="col">
                        <h1>Shop</h1>
                        <ul>
                        <li><Link to='/cafea' style={mystyleLink}>Cafea</Link></li>
                        <li><Link to='/ceai' style={mystyleLink}>Ceai</Link></li>
                        <li><Link to='/cursuri' style={mystyleLink}>Cursuri</Link></li>
                        <li><Link to='/echipamenteCafea' style={mystyleLink}>Echipamente Cafea</Link></li>
                        </ul>
                </div>
                
                <div className="col1">
                        <h1>LatteToGo COFFEE SHOP</h1> 
                        <p>
                              Atenția noastră se concentrează pe un singur vis: să dezvoltăm domeniul cafelei de 
                              specialitate în România, să explorăm potențialul acesteia în gust, urmărindu-i întregul
                              parcurs: de la fermă, la prăjitorie și în ceașcă. Nimic nu ne bucură mai mult, decât curiozitatea 
                              voastră despre cafea. Suntem aici să vă răspundem la toate întrebările, click pentru a intra în contact.
                          </p>
                </div>

                <div className="col social">
                  <h1> Get Social</h1>
                  <ul>
                    <li><a href="https://www.instagram.com/learnbuildteach"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a></li>
                    <li><a href="https://www.facebook.com/learnbuildteach/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a></li>
                    <li> <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a></li>
                    </ul>
                </div>
              <div className="clearfix"></div>

        </div>
      </div>
    </div>
  )
}

export default Footer
