import React from 'react'

import {SiCoffeescript} from 'react-icons/si';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare,FaFacebookSquare,FaYelp} from 'react-icons/fa'




export default function Footer() {
    return (
        <div className="footer">
            <div>
                <SiCoffeescript />
            </div>
            <div>
                <FaInstagram />
           </div>
           <div>
                <FaTwitterSquare />
           </div>
           <div>
                <FaFacebookSquare />
           </div>
           <div>
                <FaYelp />
            </div>
            
            
        </div>
    )
}
