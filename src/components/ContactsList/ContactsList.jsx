import { PropTypes } from 'prop-types';
import { ContactElem } from '../ContactElem/ContactElem';
import { useSelector } from 'react-redux';
import { ContactsListStyle } from './ContactsList.styled.jsx';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.length > 0 && (
        <ContactsListStyle>
          {filteredContacts.map(contact => {
            return (
              <ContactElem
                key={contact.id}
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

ContactsList.propTypes = {
  showFiltered: PropTypes.func,
};
