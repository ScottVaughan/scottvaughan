import React, { useState, useEffect } from 'react';
import './code.component.scss';

const Code = () => {
    return(
        <section className='code'>
             <div className='left-container'>
                <img src="./img/code.png" alt="code"></img>
                <div className="subheader">building industry standard products</div>
                <p>
                    I use the lastest technology to write readable, performant, testable, <span>code</span>. 
                    I specialize in the front-end, but I have experience in every facet of the dev lifecycle.
                    
                    Data structures, Design Patterns, and Performant measurable code. 
                </p>
                <ul>
                    <li>React16+</li>
                    <li>Angular10+</li>
                    <li>HTML5</li>
                    <li>SCSS | LESS</li>
                    <li>.Net Core</li>
                    <li>Azure DevOps</li>
                </ul>    
                {/* <p>
                    Primary: , , Angular.js, Angular2+, React16+, C#, .Net Core, Git
                </p>
                <p>Secondary: Mongo DB, Java, Azure DevOps</p> */}
            </div>
            <div className='right-container'>
                <img src="./img/gears.png" alt="gears"></img>
           </div>
        </section>
    )
}
export default Code; 