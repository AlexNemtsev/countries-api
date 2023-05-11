import styles from './Main.module.scss';
import { Container } from './Container';

interface MainProps {
  children?: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
};
