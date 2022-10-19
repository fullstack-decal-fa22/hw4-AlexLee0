import React from 'react';
import Color from './Color';

const Menu = (props) => { 
  
    return (
      <div className="colorOptions">
          <Color handleClick = {props.makePost} color="Red" />
          <Color handleClick = {props.makePost} color="Orange" />
          <Color handleClick = {props.makePost} color="Yellow" />
          <Color handleClick = {props.makePost} color="Blue" />

      </div>
    );
}

export default Menu;