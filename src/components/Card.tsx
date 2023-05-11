import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

interface CountryInfo {
  title: string;
  description: string | string[];
}

interface CardProps {
  img: string;
  name: string;
  info: CountryInfo[];
}

export const Card = ({ img, name, info = [] }: CardProps) => {
  return (
    <Link to={'/country/' + name} className={styles.link}>
      <img src={img} alt={name} className={styles.cardImg} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <ul className={styles.cardList}>
          {info.map((el) => (
            <li key={el.title} className={styles.cardListItem}>
              <b>{el.title}:</b>{' '}
              {typeof el.description === 'string' ? el.description : el.description.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
