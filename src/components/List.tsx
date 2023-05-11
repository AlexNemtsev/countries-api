import styles from './List.module.scss';

interface ListProps {
  children: React.ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <section className={styles.wrapper}>{children}</section>;
};
