import React, { useState, useEffect } from 'react';
import './expertise.component.scss';
import UX from './ux/ux.component';
import UI from './ui/ui.component';
import Code from './code/code.component';
const Expertise = () => {

    return(
        <section className='expertise'>
            <UX></UX>
            <UI></UI>
            <Code></Code>
        </section>
    )
}
export default Expertise; 