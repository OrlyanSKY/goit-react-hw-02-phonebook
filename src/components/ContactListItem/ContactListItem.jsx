import { ImUserMinus } from 'react-icons/im';

export const ContactListItem = ({ contacts, filter, delContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button type="button" onClick={() => delContact(id)}>
            <ImUserMinus />
          </button>
        </li>
      ))}
    </>
  );
};
