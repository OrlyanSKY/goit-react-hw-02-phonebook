import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filter, delContact }) => {
  return (
    <ul>
      <ContactListItem
        contacts={contacts}
        filter={filter}
        delContact={delContact}
      />
    </ul>
  );
};
