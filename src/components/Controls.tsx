import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search';
import CustomSelect from './CustomSelect';

interface Option {
  value: string;
  label: string;
}

interface ControlsProps {
  onSearch: (search: string, region: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const options: Option[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls = ({ onSearch }: ControlsProps) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<Option>();

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={(newValue) => {
          setRegion(newValue as Option);
        }}
      />
    </Wrapper>
  );
};

export default Controls;
