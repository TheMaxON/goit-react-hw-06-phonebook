import { ContactElem } from '../ContactElem/ContactElem';
import { useSelector } from 'react-redux';
import { ContactsListStyle } from './ContactsList.styled.jsx';
import { getContacts, getFilter } from 'redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      {filteredContacts.length > 0 && (
        <ContactsListStyle>
          {filteredContacts.map(contact => {
            return (
              <ContactElem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            );
          })}
        </ContactsListStyle>
      )}
    </>
  );
};
