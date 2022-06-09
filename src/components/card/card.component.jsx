import React, { useState, useEffect } from 'react';
import './card.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = ({url, borderColor, children}) => {
    return(
        <div className='card' style={{border: `0.4em solid ${borderColor}`}}>
            <a href={url} target="_blank">  
                {children}
            </a>
        </div>
    )
}
export default Card; 