import React from 'react';
import Square from '../Square/Square'
import './SquareList.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

class SquareList extends React.Component {
    render() {
        const { squares } = this.props;
        return (
            <div className="center mw8 list flex flex-wrap bg-near-white">
                {squares.length === 0 ? this.renderEmpty() : this.renderSquares(squares)}
            </div>
        );
    }

    renderEmpty() {
        return (
            <div className="center tc cf pa4">
                <i class="fa fa-5x fa-cube" aria-hidden="true"></i>
                <p>Add squares to get started :)</p>
            </div>
        )
    }

    renderSquares(squares){
        return squares.map(s => {
            return <Square key={s.id} square={s} deleteSquare={this.props.deleteSquare} />
        })
    }
};

export default SquareList;

