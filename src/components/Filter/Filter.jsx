import PropTypes from 'prop-types';
import {FilterLabel,FilterInput} from './Filter.styled'

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;