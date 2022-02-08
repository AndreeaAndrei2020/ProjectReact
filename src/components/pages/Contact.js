import React from 'react'
import './Contact.css'

function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}?`}>
        {props.children}
      </a>
    );
  }
export default function Contact() {
    return (
        <div className='divContact'>
            <h2>CONTACT</h2>
            
    
                <div className='CardContact'>
              

                            <p  className="text-center"><strong>PRAJITORIE LatteToGo </strong></p>

                            <p  className="text-center"><strong>COMENZI SITE.INFORMAȚII.SERVICE: </strong>0747 248 187;   <Mailto email=" office@lattetogo.ro" subject="Hello" className='MailClass'>
                            office@lattetogo.ro
                            </Mailto></p>

                            <p  className="text-center"><strong>ADRESĂ:</strong> Strada Lanului nr 4, Sector 2, București; Cod poștal 023057</p>

                            


                            <p  className="text-center"><strong>INFORMAȚII :</strong> 0757 086 689; admin@lattetogo.ro</p>

                            <p  className="text-center"><strong>ADRESĂ: </strong>Strada Lipscani nr 9, Sector 5, Bucuresti; Cod poștal 050071</p>

                           <p  className="text-center" > <strong>PROGRAM:</strong>  </p>
                                                                <p className="text-center">Luni 07.30 - 20.00</p>
                                               <p className="text-center" >       Marti - Vineri 07.30 - 21:00 </p>
                                                <p className="text-center">         Sambata - Duminica  8.00 - 21:00</p>


        </div>
        </div>
    )
}


 
