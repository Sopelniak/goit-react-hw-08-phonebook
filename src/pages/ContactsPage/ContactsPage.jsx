import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from 'components/Contacts/Contacts';
import { AddContactForm } from 'components/Form/AddContactForm';
import { selectContacts, selectError, selectIsLoading } from 'redux/users/contacts-selectors';
import { fetchContacts } from 'redux/users/contactsOparations';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';

export const ContactsPage = () => {
  const [modalIsOpen, setmodalIsOpen] = useState('');
  const [currentContact, setcurrentContact] = useState(null);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  const openModal = (param, contact) => {
    setmodalIsOpen(param);
    setcurrentContact(contact);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  return (

    <>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
      {modalIsOpen && (
        <Modal
          closeModal={closeModal}
          param={modalIsOpen}
          contact={currentContact}
        />
      )}
    </>

   
      
  );
};
