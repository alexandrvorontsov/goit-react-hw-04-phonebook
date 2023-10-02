import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  BodyForm,
  LabelForm,
  InputForm,
  ButtonForm,
} from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ id: nanoid(), name: name, number: number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <BodyForm onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          placeholder="Jacob Mercer"
          type="text"
          name="name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          placeholder="555-55-55"
          type="tel"
          name="number"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
        />
      </LabelForm>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </BodyForm>
  );
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { name, number } = this.state;
//     const data = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     console.log(data);

//     this.props.addContacts(data);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <BodyForm onSubmit={this.handleSubmit}>
//         <LabelForm>
//           Name
//           <InputForm
//             placeholder="Jacob Mercer"
//             type="text"
//             name="name"
//             required
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </LabelForm>
//         <LabelForm>
//           Number
//           <InputForm
//             placeholder="555-55-55"
//             type="tel"
//             name="number"
//             required
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={number}
//             onChange={this.handleChange}
//           />
//         </LabelForm>
//         <ButtonForm type="submit">Add contact</ButtonForm>
//       </BodyForm>
//     );
//   }
// }

// ContactForm.propTypes = {
//   addContacts: PropTypes.func.isRequired,
// };
