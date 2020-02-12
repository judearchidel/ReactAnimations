import React from 'react';

import  './Backdrop.css';

const backdrop = (props) => {
    const csscls =["Backdrop", props.shows ? "BackdropOpen": "BackdropClose"];
    return (
    <div className={csscls.join(' ')}></div>
)};

export default backdrop;