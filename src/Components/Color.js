import React from 'react';

const Color = (props) => {

    return (
        <div>
            <button onClick={() => props.handleClick(props.color) }>Post {props.color}</button>
        </div>
    );
}

export default Color;