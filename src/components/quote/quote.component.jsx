import React, { useState, useEffect } from 'react';
import './quote.component.scss';
const Quote = ({person,children}) => {

    return(
        <div className='quote'>
            <q>{children}</q>
            <div>-{person}</div>
        </div>
    )
}
export default Quote; 