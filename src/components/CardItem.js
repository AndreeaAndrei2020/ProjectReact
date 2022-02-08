import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function CardItem(props) {
    return (
        <>
        <div className="column">
                    <li className='cards_item'>
                            
                        <Link to={props.path}>
                                    <figure className='cards_item_pic'> 
                                            <img src={props.src} alt={props.alt} className="cards_items_img" />
                                            <h5 className='textH5'>{props.text}</h5>
                                    </figure>                                            
                        </Link>

                    </li>
        </div>
        </>
    )
}

export default CardItem
