import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'

class NotSupportedWarning extends React.Component {
    render() {
        return (
            <div className="center mw8 bg-near-white pa4 min-vh-100 tc">
                <i class="far fa-5x fa-frown" aria-hidden="true"></i>
                <p className="f2"><i>Aww, bummer!</i></p>
                <p className="f3">
                    Sorry, your browser <strong>does not support</strong> speech synthesis.<br />
                </p>
            </div>
        );
    }
};

export default NotSupportedWarning;