import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};
