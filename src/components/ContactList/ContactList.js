import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        {name}: {number}
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
