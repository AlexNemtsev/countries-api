import styles from './Search.module.scss';

import { IoSearch } from 'react-icons/io5';

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <label className={styles.label}>
      <IoSearch />
      <input
        className={styles.input}
        type="input"
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </label>
  );
};
