import React from 'react';
import Square from '../Square/Square'

class SquareList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { squares } = this.props;
        return (
            <div className="flex flex-wrap">
            {squares.map(s => {
                return <Square key={s.id} square={s} />
            })}
            </div>);
    }
};

export default SquareList;

