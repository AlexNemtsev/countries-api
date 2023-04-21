import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'input',
  placeholder: 'Search for a country...',
})`
  border: none;
  outline: none;
  margin-left: 2rem;
  color: var(--colors-text);
`;

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
}
