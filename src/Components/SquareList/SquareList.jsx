import React from 'react';
import Square from '../Square/Square'
import './SquareList.css'
import {FaCube} from 'react-icons/fa'

class SquareList extends React.Component {
    render() {
        const { squares } = this.props;
        return (
            <div className="center mw8 list bg-near-white">
                <div className="flex m-center flex-wrap">
                    {squares.length === 0 ? this.renderEmpty() : this.renderSquares(squares)}
                </div>
            </div>
        );
    }

    renderEmpty() {
        return (
            <div className="center tc cf pa4">
                <FaCube className="f-headline" />
                <p className="f3">Add squares to get started :)</p>
            </div>
        )
    }

    renderSquares(squares) {
        return squares.map(s => {
            return <Square key={s.id} square={s} deleteSquare={this.props.deleteSquare} />
        })
    }
};

export default SquareList;

