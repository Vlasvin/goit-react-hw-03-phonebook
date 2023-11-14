import { ContItem, ContP, ContBtn } from 'components/Contact/Contact.styled';

export const Contact = ({ formattedName, contact, deleteContact }) => {
  return (
    <ContItem>
      <ContP>
        {formattedName}: {contact.number}
      </ContP>

      <ContBtn onClick={() => deleteContact(contact.id)}>Delete</ContBtn>
    </ContItem>
  );
};
