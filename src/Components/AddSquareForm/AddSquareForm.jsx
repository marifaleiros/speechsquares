import React from 'react';

class AddSquareForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div className="bg-blue2 mw8 center pa4 cf h-100">
                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                    placeholder="type a 'sound' and add it to the board"
                    type="text"
                    value={this.state.text}
                    onChange={this.updateState}
                    onKeyPress={this.checkEnter} />
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                    type="submit"
                    value="Add"
                    onClick={this.onAdd} />
            </div>);
    }

    updateState = (e) => {
        this.setState({ text: e.target.value })
    }

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.onAdd();
        }
    }

    onAdd = () => {
        if (this.state.text) {
            if (this.props.onAddSquare)
            {
                this.props.onAddSquare(this.state.text);
                this.setState({ text: '' });
            }
        }
    }
};

export default AddSquareForm;
