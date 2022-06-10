import React, { useState, useEffect } from 'react';
import './portfolio.component.scss';
import {Model, Card} from '../../components';
import projects from './portfolio-projects.json';
const Portfolio = () => {
    return(
        <section className='portfolio'>
            <h2>Portfolio</h2> 
            <div className='card-row'>
                <Card url="./SassyBakery.pdf" borderColor="#B23257">
                    <img src="./img/Bakery.svg" alt="bakery logo"></img>
                </Card>
                <Card url="./Aquarium.pdf" borderColor="#1569B0">
                    <img src="./img/Aquarium.svg" alt="aquarium logo"></img>
                </Card>
                <div></div>
                <div></div>
            </div>
           
         
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