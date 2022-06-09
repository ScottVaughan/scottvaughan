import React, { useState, useEffect } from 'react';
import './quote.component.scss';
const Quote = ({person, color, children}) => {

    return(
        <div className={`quote ${color}`}>
            <q>{children}</q>
            <div>-{person}</div>
        </div>
    )
}
export default Quote; 