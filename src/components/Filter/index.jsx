import s from './filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
