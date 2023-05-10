import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CountryInfo } from '../interfaces/country-info';
import { useState, useEffect } from 'react';
import { filterByCodes } from '../libs/loader';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    gap: 4rem;
    flex-direction: row;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled(Link)`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
  color: var(--colors-text);
`;

type InfoProps = CountryInfo;

export const Info = (props: InfoProps) => {
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
    <Wrapper>
      <InfoImage src={flags.svg} alt={flags.alt} />
      <div>
        <InfoTitle>{commonName}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population: </b> {population}
            </ListItem>
            <ListItem>
              <b>Region: </b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region: </b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital{capital.length > 1 ? 's' : ''}: </b> <span>{capital.join(', ')}</span>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain{tld.length > 1 ? 's' : ''}: </b>
              <span>{tld.join(', ')}</span>
            </ListItem>
            <ListItem>
              <b>Currenc{currenciesList.length > 1 ? 'ies' : 'y'}: </b>
              <span>{currenciesList.map((code) => currencies[code].name).join(', ')}</span>
            </ListItem>
            <ListItem>
              <b>Languag{languagesList.length > 1 ? 'es' : 'e'}: </b>
              <span>{languagesList.map((code) => languages[code]).join(', ')}</span>
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border countries: </b>
          {!neighbours.length ? (
            <span>There are no border countries</span>
          ) : (
            <TagGroup>
              {neighbours.map((border) => (
                <Tag key={border} to={'/country/' + border}>
                  {border}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
