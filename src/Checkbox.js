import React from 'react';

const Checkbox = ({ type = 'checkbox', id, checked = false, onChange }) => (
  <input id={id} type={type} checked={checked} onChange={onChange} />
);

export default Checkbox;
