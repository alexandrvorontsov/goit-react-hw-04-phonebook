import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Phonebook } from './App.styled';

import { nanoid } from 'nanoid';

export default function App() {
  const LS_KEY = 'users';
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localTodo = localStorage.getItem(LS_KEY);
    if (localTodo) setContacts(JSON.parse(localTodo));

    // const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    // setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    contacts && localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    // localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  // const addContact = data => {
  //   console.log(data, 'data');
  //   const { name } = data;
  //   const isContactExist = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (isContactExist) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     setContacts(prevContacts => [...prevContacts, data]);
  //   }
  // };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(prevContacts =>
      prevContacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = id => {
    console.log(id);
    setContacts(prevContacts => {
      return prevContacts.filter(contacts => contacts.id !== id);

      // return prevContacts.filter(contact => contact.id !== evt.target.id); тут что не то
    });
  };

  const addContact = data => {
    setContacts(prevTodoList => {
      return [...prevTodoList, data];
    });
    console.log(data);
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Filter</h2>
      <Filter filter={filter} onChange={handleChange} />
      <h2>Contacts</h2>
      <ContactList getContacts={handleFilter()} deleteContact={handleDelete} />
    </Phonebook>
  );
}

// const LS_KEY = 'contacts';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     isDelete: false,
//     isCreate: false,
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   addContacts = data => {
//     const { contacts } = this.state;
//     const { name } = data;
//     const isContactExist = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isContactExist) {
//       return alert(`${name} is already in contacts`);
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, data],
//     }));
//   };

//   handleFilter = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   handleDelete = evt => {
//     const { contacts } = this.state;
//     const elementToRemove = evt.currentTarget.parentNode.id;
//     this.setState({
//       contacts: contacts.filter(contact => contact.id !== elementToRemove),
//     });
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem(LS_KEY)) || [];
//     this.setState({ ...this.state, contacts });
//   }

//   // componentWillUnmount() {
//   //   console.log('componentWillUnmount');}

//   componentDidUpdate(prevProps, prevState) {
//     localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));

//     if (prevState.contacts.length < this.state.contacts.length) {
//       this.setState({ isCreate: true });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 1000);
//     }

//     if (prevState.contacts.length > this.state.contacts.length) {
//       this.setState({ isDelete: true });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1000);
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     return (
//       <Phonebook>
//         <h1>Phonebook</h1>
//         <ContactForm addContacts={this.addContacts} />
//         <h2>Filter</h2>
//         <Filter filter={filter} onChange={this.handleChange} />
//         <h2>Contacts</h2>
//         <ContactList
//           getContacts={this.handleFilter()}
//           deleteContact={this.handleDelete}
//         />
//         {this.state.isDelete && (
//           <MessageDelete>Contact delete successfullly!</MessageDelete>
//         )}
//         {this.state.isCreate && (
//           <MessageCreate>Contact create successfullly!</MessageCreate>
//         )}
//       </Phonebook>
//     );
//   }
// }
