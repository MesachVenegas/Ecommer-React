import React from 'react';
import './loader.css'

const Loader = () => {
    return (
        <div className='overlay_loader'>
            <div className="lds-mk">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;