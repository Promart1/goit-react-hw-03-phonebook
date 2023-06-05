import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => (
  <label className={css.label}>
    Filter contacts by name:
    <input
      className={css.input}
      type="text"
      placeholder="Name"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
