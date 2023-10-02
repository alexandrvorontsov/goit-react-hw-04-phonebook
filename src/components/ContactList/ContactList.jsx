import PropTypes from 'prop-types';
import { BodyList, ListItem, ListButton } from './ContactList.styled';

export default function ContactList({ getContacts, deleteContact }) {
  return (
    <div>
      <BodyList>
        {getContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id} id={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <ListButton type="button" onClick={() => deleteContact()}>
                Delete
              </ListButton>
            </ListItem>
          );
        })}
      </BodyList>
    </div>
  );
}

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
