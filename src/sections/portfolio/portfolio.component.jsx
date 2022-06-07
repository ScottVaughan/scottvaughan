import React, { useState, useEffect } from 'react';
import './portfolio.component.scss';
import {Model} from '../../components';
import projects from './portfolio-projects.json';
const Portfolio = () => {
    return(
        <section className='portfolio'>
            <a href="./SassyBakery.pdf" target="_blank">Sweet and Sassy Bakery</a>
            {/* <Model props={projects[0]}>
                <embed
                    src="./SassyBakery.pdf"
                    type="application/pdf"
                    frameBorder="0"
                    scrolling="auto"
                    height="100%"
                    width="100%"
                ></embed> 
            </Model> */}
        </section>
    )
}
export default Portfolio; 