import { Label } from '../Form/Form.styled.jsx';
import { InputStyle } from '../Form/Form.styled.jsx';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <Label htmlFor="search">
      Find contacts by name
      <InputStyle
        type="text"
        name="search"
        placeholder="Search"
        onChange={e => onChange(e)}
      />
    </Label>
  );
};
