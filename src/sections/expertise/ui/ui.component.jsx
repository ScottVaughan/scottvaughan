import React, { useState, useEffect } from 'react';
import './ui.component.scss';

const UI = () => {
    return(
        <section className='ui'>
            <div id="lc" className='left-container'>
                <img src="./img/brain.png" alt="brain"></img>
           </div>
           <div id="rc" className='right-container'>
                <img src="./img/ui.png" alt="ux"></img>
                <div className="subheader">creating visual products to build trust in the brand</div>
                <p>
                    Once the UX designs are approved, I then begin implementing the look and feel of the <span>user interface</span>. 
                    This includes colors and imagery that creates a professional, clean, application.
                </p>
                <ul>
                    <li>High Fidility Compositions</li>
                    <li>Logo and Graphic Design</li>
                    <li>Spec Sheets</li>
                    <li>Design Library</li>
                    <li>Style Sheets</li>
                </ul>    
                {/* <p>Adobe Illustrator, Adobe Photoshop, Adobe Premiere, Adobe Affter Effects</p> */}
            </div>
           
        </section>
    )
}
export default UI; 