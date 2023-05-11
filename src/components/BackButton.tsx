import styles from './BackButton.module.scss';

interface BackButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

export const BackButton = ({ children, onClick }: BackButtonProps) => {
  return (
    <button className={styles.BackButton} onClick={onClick}>
      {children}
    </button>
  );
};
