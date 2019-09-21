import React from 'react';
import {FaFrown} from 'react-icons/fa'

const NotSupportedWarning = () => {
    return (
        <div className="center mw8 bg-near-white pa4 min-vh-100 tc">
            <FaFrown className="f-headline"/>
            <p className="f2"><i>Aww, bummer!</i></p>
            <p className="f3">
                Sorry, your browser <strong>does not support</strong> speech synthesis.<br />
            </p>
        </div>
    );
}

export default NotSupportedWarning;