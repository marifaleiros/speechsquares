import React from 'react';
import Square from '../Square/Square'
    
class SquareList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { squares } = this.props;
        return (
            <div>
                <div className="flex flex-wrap center">
                    {squares.map(s => {
                        return <Square key={s.id} square={s} />
                    })}
                </div>
            </div>);
    }
};

export default SquareList;

