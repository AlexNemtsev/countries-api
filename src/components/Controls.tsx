import { useState } from 'react';
import Search from './Search';
import CustomSelect from './CustomSelect';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export default function Controls() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('second');

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </div>
  );
}
