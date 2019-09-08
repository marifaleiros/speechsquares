import React from 'react';
import './Square'

class Square extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { square } = this.props;
        return (
            <div className="pa2" onClick={this.speak}>
                <div className="ba br2 b--light-silver shadow-1 w4 h4 bg-pink dim pointer">
                    <p className="db link tc pa4">{square.text}</p>
                </div>
            </div>);
    }

    speak = () => {
        const {square} = this.props;
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(square.text);
        const voices = synth.getVoices();
        console.log(voices);
        //const voiceUri = "Microsoft Maria Desktop - Portuguese(Brazil)"
        const voiceUri = "Google português do Brasil"
        const voice = voices.filter((v, i, a) => v.voiceURI==voiceUri)[0];
        console.log(voice);
        utterThis.voice = voice;
        synth.speak(utterThis);
    }
};

export default Square;



