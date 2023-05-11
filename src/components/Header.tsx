import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link to="/" className={styles.title}>
            Where is the world?
          </Link>
          <div onClick={toggleTheme} className={styles.modeSwitcher}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
            <span style={{ marginLeft: '0.75rem' }}>{theme} theme</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
