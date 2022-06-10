import React, { useState, useEffect } from 'react';
import './about.component.scss';
const About = () => {

    return(
        <section className='about'>
            {/* <h2>About</h2> */}
            <div>
                <div className='text-container'>
                    <p>Hello, I'm <span>Scott Vaughan</span></p>
                    <p>I Design, Code, and Deploy industry standard applications.</p>
                    <p>
                        With over six years of experience working for a fortune 500 company, I've been plugged into every facet of the developer lifecycle. 
                        I specialize in front-end development, but I have extensive experience designing and setting up
                        the database and service layer.   
                    </p>
                    <p>Design and Code is my <span>Passion</span>. Lets build something incredible. </p>
                </div>
                <img src="./img/laptop.png" alt="laptop"></img>
            </div>
        </section>
    )
}
export default About; 