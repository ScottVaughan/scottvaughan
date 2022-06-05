import React, { useState, useEffect } from 'react';
import { SocialMedia } from '../../components';
import './footer.component.scss';
import logo from '../../logo.svg';

const Footer = () => {

    return(
        <footer>
            <div class="social-media">
                <SocialMedia></SocialMedia>
            </div>
            <div>
                <img src={logo} alt="Scott Vaughan" id="logo"></img>
            </div>
            <div>
                &copy; 2022 Scott Vaughan
            </div>
        </footer>
    )
}
export default Footer; 