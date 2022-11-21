import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';

import s from '../ContactForm/ContactForm.module.scss';

export const Filter = ({ filtration }) => {
  const contacts = useSelector(selectContacts);

  const handleFilterInput = ({ target: { value } }) => {
    filtration(value.toLowerCase());
  };

  return (
    <>
      {contacts.length > 0 && (
        <label className={s.label}>
          Find contacts by name
          <input
            className={s.input}
            type="text"
            name="filter"
            required
            onChange={e => handleFilterInput(e)}
          />
        </label>
      )}
    </>
  );
};

Filter.propTypes = {
  filtration: PropTypes.func.isRequired,
};
