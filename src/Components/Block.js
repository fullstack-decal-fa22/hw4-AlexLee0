import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {

    return (
        <div data-testid='main-component'>
            <div className="post" style={{backgroundColor: props.color}}></div>
            <div className="caption">{props.color}</div>
        </div>
    );
}

export default Block;