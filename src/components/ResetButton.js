import React from 'react';
import './ResetButton.css';

function ResetButton(props) {
  return (
    <button className="btn btn-primary" type="button" onClick={props.onClick}>Reset</button>
  );
}

export default ResetButton;