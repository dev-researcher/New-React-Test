import React from 'react';
import './button.scss';

const Button = ({ type, onClick, children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
