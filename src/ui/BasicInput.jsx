import React from 'react';

export const BasicInput = ({ label, type, value, onChange }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <br></br>
      <input
        placeholder="ej. helloworld"
        id="name"
        required
        className="input"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
