import React from 'react';
import './input.scss';

const InputField = ({ label, type, name, value, onChange, required }) => (
  <div className="form__group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default InputField;
