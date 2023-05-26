import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { Label } from '../Form/Form.styled.jsx';
import { InputStyle } from '../Form/Form.styled.jsx';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const normalizedQuery = query.toLowerCase().trim();
    dispatch(changeFilter(normalizedQuery));
  }, [query, dispatch]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Label htmlFor="search">
      Find contacts by name
      <InputStyle
        type="text"
        name="search"
        placeholder="Search"
        onChange={e => onChange(e)}
        value={query}
      />
    </Label>
  );
};

// Filter.propTypes = {
//   currentFilter: PropTypes.string.isRequired,
//   updateFilter: PropTypes.func.isRequired,
// };
