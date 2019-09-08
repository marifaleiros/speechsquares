import React from 'react';
import './Square.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDeleteButtonHidden: true
        }
    }
    render() {
        const { square } = this.props;
        return (
            <div className="pa2"
                onClick={this.speak}>
                <div className="ba br2 b--light-silver shadow-1 w4 h4 bg-pink dim pointer"
                    onMouseEnter={this.showDeleteButton}
                    onMouseLeave={this.hideDeleteButton}>
                    {!this.state.isDeleteButtonHidden &&
                        <div className="tc br-100 bg-near-white delete">
                            <i className="dib  v-mid fa fa-trash-alt"/>
                        </div>}
                    <p className="db link tc pa4">{square.text}</p>
                </div>
            </div>);
    }

    speak = () => {
        const { square } = this.props;
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(square.text);
        const voices = synth.getVoices();
        console.log(voices);
        //const voiceUri = "Microsoft Maria Desktop - Portuguese(Brazil)"
        const voiceUri = "Google português do Brasil"
        const voice = voices.filter((v, i, a) => v.voiceURI == voiceUri)[0];
        console.log(voice);
        utterThis.voice = voice;
        synth.speak(utterThis);
    }

    showDeleteButton = () => {
        console.log(this.state.isDeleteButtonHidden)
        if (this.state.isDeleteButtonHidden)
            this.toggleDeleteButtonVisibility();
    }

    hideDeleteButton = () => {
        if (!this.state.isDeleteButtonHidden)
            this.toggleDeleteButtonVisibility();
    }

    toggleDeleteButtonVisibility = () => {
        this.setState({ isDeleteButtonHidden: !this.state.isDeleteButtonHidden });
    }
};

export default Square;



