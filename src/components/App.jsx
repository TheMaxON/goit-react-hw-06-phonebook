import Input from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

const App = () => {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Input />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
