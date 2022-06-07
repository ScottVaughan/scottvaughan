import React, { useState, useEffect } from 'react';
import './model.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Model = ({props,children}) => {

    return(
        <div className='model'>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
            {/* <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.overview}</div> */}
            {children}
        </div>
    )
}
export default Model; 