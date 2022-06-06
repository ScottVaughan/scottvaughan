import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './social-media.component.scss';
const SocialMedia = () => {

    return(
        <div className='social-media'>
            <a href="https://www.instagram.com/scottgvaughan" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/ScottVaughan" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/scott-vaughan-a9681a75/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/scottgvaughan" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://www.facebook.com/scott.vaughan.501" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
            </a>
        </div>
    )
}
export default SocialMedia; 