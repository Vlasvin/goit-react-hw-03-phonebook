import { ContList } from 'components/ContactList/ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContList>
      {contacts.map(contact => {
        const formattedName = contact.name
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <Contact
            key={contact.id}
            contact={contact}
            formattedName={formattedName}
            deleteContact={deleteContact}
          ></Contact>
        );
      })}
    </ContList>
  );
};
