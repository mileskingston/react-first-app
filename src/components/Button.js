import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button 
      className={'btn ' + (props.class? props.class: 'btn-primary')} 
      type={(props.type? props.type: 'button')} 
      onClick={props.onClick}>{props.label}</button>
  );
}

export default Button;