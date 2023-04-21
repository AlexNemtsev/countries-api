import { useState } from 'react';
import Search from './Search';

export default function Controls() {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
}
