import styles from './Info.module.scss';
import { Link } from 'react-router-dom';
import { CountryInfo } from '../interfaces/country-info';
import { useState, useEffect } from 'react';
import { filterByCodes } from '../libs/loader';

export const Info = (props: CountryInfo) => {
  const commonName = props.name.common;
  const { flags, population, capital, region, subregion, tld, currencies, languages, borders } =
    props;

  const languagesList = Object.keys(languages);
  const currenciesList = Object.keys(currencies);
  const nativeName = props.name.nativeName[languagesList[0]].common;

  const [neighbours, setNeighbours] = useState<string[]>([]);

  useEffect(() => {
    if (borders) {
      filterByCodes(borders).then((data) => setNeighbours(data.map((c) => c.name.common)));
    }
  }, [borders]);

  return (
    <section className={styles.section}>
      <img src={flags.svg} alt={flags.alt} className={styles.infoImage} />
      <div>
        <h1 className={styles.infoTitle}>{commonName}</h1>
        <div className={styles.listGroup}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <b>Native Name: </b> {nativeName}
            </li>
            <li className={styles.listItem}>
              <b>Population: </b> {population}
            </li>
            <li className={styles.listItem}>
              <b>Region: </b> {region}
            </li>
            <li className={styles.listItem}>
              <b>Sub Region: </b> {subregion}
            </li>
            <li className={styles.listItem}>
              <b>Capital{capital.length > 1 ? 's' : ''}: </b> <span>{capital.join(', ')}</span>
            </li>
          </ul>
          <ul className={styles.list}>
            {tld && (
              <li className={styles.listItem}>
                <b>Top Level Domain{tld.length > 1 ? 's' : ''}: </b>
                <span>{tld.join(', ')}</span>
              </li>
            )}
            <li className={styles.listItem}>
              <b>Currenc{currenciesList.length > 1 ? 'ies' : 'y'}: </b>
              <span>{currenciesList.map((code) => currencies[code].name).join(', ')}</span>
            </li>
            <li className={styles.listItem}>
              <b>Languag{languagesList.length > 1 ? 'es' : 'e'}: </b>
              <span>{languagesList.map((code) => languages[code]).join(', ')}</span>
            </li>
          </ul>
        </div>
        <div className={styles.meta}>
          <b>Border countries: </b>
          {!neighbours.length ? (
            <span>There are no border countries</span>
          ) : (
            <div className={styles.tagGroup}>
              {neighbours.map((border) => (
                <Link key={border} to={'/country/' + border} className={styles.tag}>
                  {border}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
