import React from 'react';
import "./Toast.css"

const Toast = () => {
    return (
        <div className='toast'>
            <div className="toast__container">
                <div className="toast__content">
                    <p>Your post is approved</p>
                    <span>x</span>
                </div>
            </div>
        </div>
    );
};

export default Toast;