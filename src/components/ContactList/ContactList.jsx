import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
export const ContactList = ({ contacts, filter, delContact }) => {
  return (
    <List>
      <ContactListItem
        contacts={contacts}
        filter={filter}
        delContact={delContact}
      />
    </List>
  );
};

ContactList.propTypes = {
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
