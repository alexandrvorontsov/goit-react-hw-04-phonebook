import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Phonebook, MessageDelete, MessageCreate } from './App.styled';

export default function App() {
  const LS_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    const localTodo = localStorage.getItem(LS_KEY || []);
    if (localTodo) setContacts(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    contacts && localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const addContact = value => {
    const { name } = value;
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevTodoList => {
      return [...prevTodoList, value];
    });
    setIsCreate(true);
    setTimeout(() => {
      setIsCreate(false);
    }, 1000);
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(prevContacts =>
      prevContacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = elementToRemove => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== elementToRemove)
    );
    setIsDelete(true);
    setTimeout(() => {
      setIsDelete(false);
    }, 1000);
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Filter</h2>
      <Filter filter={filter} onChange={handleChange} />
      <h2>Contacts</h2>
      <ContactList getContacts={handleFilter()} deleteContact={handleDelete} />
      {isDelete && <MessageDelete>Contact delete successfullly!</MessageDelete>}
      {isCreate && <MessageCreate>Contact create successfullly!</MessageCreate>}
    </Phonebook>
  );
}
