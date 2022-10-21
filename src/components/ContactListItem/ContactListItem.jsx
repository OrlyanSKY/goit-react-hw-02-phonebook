import { ImUserMinus } from 'react-icons/im';
import PropTypes from 'prop-types';
import { DelBtn, ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, filter, delContact }) => {
  const normalizedFilter = filter.toLowerCase().trim();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {filteredContacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          {name}: {number}{' '}
          <DelBtn type="button" onClick={() => delContact(id)}>
            <ImUserMinus />
          </DelBtn>
        </ListItem>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  delContact: PropTypes.func.isRequired,
};
