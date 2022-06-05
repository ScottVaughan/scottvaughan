import React, { useState, useEffect } from 'react';
import './ux.component.scss';
const UX = () => {

    return(
        <section className='ux'>
           <div className='left-container'>
                <img src="./img/ux.png" alt="ux"></img>
                <div className="subheader">creating intuitive products to serve the ideal end user</div>
                <p>
                    When I recieve requirements I set in motion the processes of designing the <span>user experience</span>. 
                    I strive for the end users ease of use and enjoyment in utilizing the app.
                </p>
                <p>
                    I achieve this by: User research, personas, wireframes, prototypes, 
                    I am an org lead and have trained several other team members. Web Content Accessibility Guidelines (WCAG)
                </p>
                <p>Balsamiq, Adobe Xd</p>
           </div>
            <div className='right-container'>
                <img src="./img/magnifying-glass.png" alt="magnifying glass"></img>
            </div>
        </section>
    )
}
export default UX; 