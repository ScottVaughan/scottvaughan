import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './social-media.component.scss';
const SocialMedia = () => {

    return(
        <div className='social-media'>
            <a href="https://www.instagram.com/scottgvaughan" target="_blank">
                {/* <FontAwesomeIcon icon="fa-Check" size="5x" /> */}
                {/* <i class="fa fa-instagram"></i> */}
            </a>
            <a href="https://www.linkedin.com/in/scott-vaughan-a9681a75/" target="_blank">
            {/* <FontAwesomeIcon icon={"Cog"} size="5x" /> */}
                <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/scottgvaughan" target="_blank">
                <i class="fa fa-twitter-square"></i>
            </a>
            <a href="https://www.facebook.com/scott.vaughan.501" target="_blank">
                <i class="fa fa-facebook-square"></i>
            </a>
        </div>
    )
}
export default SocialMedia; 