import { PropTypes } from 'prop-types';
import {
  ContactElemStyle,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactElem.styled.jsx';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice';

export const ContactElem = ({ name, number }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(remove(name));
  };

  return (
    <ContactElemStyle>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => onRemove()}>
        Remove
      </DeleteBtn>
    </ContactElemStyle>
  );
};

ContactElem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
