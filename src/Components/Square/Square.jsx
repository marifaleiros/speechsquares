import React from 'react';
import './Square.css'
import './SquareThemes.css'
import { FaTrashAlt } from 'react-icons/fa'
import pickRandomTheme from '../../libs/SquareThemes'
import synth from '../../libs/Synth'
import Zoom from '@material-ui/core/Zoom';

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDeleteButtonHidden: true
        }
    }

    render() {
        const { square } = this.props;
        let theme = square.theme || pickRandomTheme();
        let text = square.text;
        let isTextTrimmed = false;
        if (square.text.length > 4) {
            text = square.text.substring(0, 4).concat('...');
            isTextTrimmed = true;
        }
        return (
            <Zoom in={true} timeout={200}>
                <div className="pa2"
                    onClick={this.speak}>
                    <div className={`sb shadow-1 w4 h4 grow pointer bg-${theme} b-${theme}`}
                        onMouseLeave={this.hideDeleteButton}
                        onMouseOver={this.showDeleteButton}>
                        {!this.state.isDeleteButtonHidden &&
                            <div onClick={this.props.deleteSquare.bind(null, square.id)}>
                                <FaTrashAlt className="delete" />
                            </div>}
                        <p className="db link tc pa2 square-text tooltip">{text}
                            {isTextTrimmed && <span class="tooltiptext">{square.text}</span>}</p>
                    </div>
                </div>
            </Zoom>);
    }

    speak = () => {
        const { square } = this.props;
        const spoke = synth.speak(square.text);
        if (!spoke)
            alert("Aww, something went wrong and I could not speak :(. Maybe your device doesn't support voices, try using this app on the web");
    }

    showDeleteButton = () => {
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



