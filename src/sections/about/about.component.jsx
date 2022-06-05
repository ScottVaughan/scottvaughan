import React, { useState, useEffect } from 'react';
import './about.component.scss';
const About = () => {

    return(
        <section className='about'>
            <h2>About</h2>
            <p>
                <span>Hello, I'm Scott Vaughan</span>
                I Design, Code, and Deploy industry standard applications. I have six years of experience working for a fortune 500 company. I've
                mentored in design and coding principles. I specialize in front-end development, but I have extensive experience designing, setting up,
                a database and server layer.   
                Design and Code is my <span>Passion</span>. Lets build something incredible. 
            </p>
            <img src="./img/laptop.svg" alt="laptop"></img>
        </section>
    )
}
export default About; 