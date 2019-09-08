import React from 'react';
import './Square.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { squareThemes } from './SquareThemes'

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDeleteButtonHidden: true
        }
    }
    render() {
        const { square } = this.props;
        let theme = square.theme;
        if (!theme)
            theme = squareThemes.red;
        const squareClasses = this.mountSquareClasses(theme);
        return (
            <div className="pa2"
                onClick={this.speak}>
                <div className={squareClasses}
                    onMouseLeave={this.hideDeleteButton}
                    onMouseOver={this.showDeleteButton}>
                    {!this.state.isDeleteButtonHidden &&
                        <div onClick={this.props.deleteSquare.bind(null, square.id)}>
                            <i className="delete fa fa-trash-alt" />
                        </div>}
                    <p className="db link tc pa2 square-text">{square.text}</p>
                </div>
            </div>);
    }

    mountSquareClasses = (theme) => {
        const squareClasses = 'sb shadow-1 w4 h4 grow pointer';
        const SPACE = ' ';
        let bg = `bg-${theme}`;
        let border = `b-${theme}`;

        return squareClasses.concat(SPACE, bg, SPACE, border);
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



