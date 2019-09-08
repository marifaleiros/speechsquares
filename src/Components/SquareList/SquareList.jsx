import React from 'react';
import Square from '../Square/Square'
import './SquareList.css'

class SquareList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { squares } = this.props;
        return (
            <div className="center mw8 list flex flex-wrap bg-near-white">
                {squares.map(s => {
                    return <Square key={s.id} square={s} deleteSquare={this.props.deleteSquare} />
                })}
            </div>
        );
    }

  
};

export default SquareList;

