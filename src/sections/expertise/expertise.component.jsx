import React, { useState, useEffect } from 'react';
import './expertise.component.scss';
import UX from './ux/ux.component';
import UI from './ui/ui.component';
import Code from './code/code.component';
import Quote from '../../components/quote/quote.component';
const Expertise = () => {

    return(
        <section className='expertise'>
            <UX></UX>
            <UI></UI>
            <Code></Code>
            <Quote person="David Frost" color="blue">
                Don’t aim for success if you want it, just do what you love and believe in and it will come naturally
            </Quote>
        </section>
    )
}
export default Expertise; 