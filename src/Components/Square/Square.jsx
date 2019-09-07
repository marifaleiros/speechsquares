import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { text } = this.props;
        return (
            <div className="pa2" onClick={this.speak}>
                <div className="ba br2 b--light-silver shadow-1 fl w4 h4 bg-pink dim pointer">
                    <p className="db link tc pa4">{text}</p>
                </div>
            </div>);
    }

    speak = () => {
        const {text} = this.props;
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        const voice = synth.getVoices().filter((v, i, a) => v.voiceURI=="Google português do Brasil")[0];
        console.log(voice);
        utterThis.voice = voice;
        synth.speak(utterThis);
    }
};

export default Square;



