import React, { useState, useEffect } from 'react';
import './portfolio.component.scss';
import {Model} from '../../components';
import projects from './portfolio-projects.json';
const Portfolio = () => {
    return(
        <section className='portfolio'>
            {/* <iframe
                src="./resume.pdf"
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
            ></iframe>
            <embed
                src="./cookie.pdf"s
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
            ></embed> */}
            <Model props={projects[0]}></Model>
        </section>
    )
}
export default Portfolio; 