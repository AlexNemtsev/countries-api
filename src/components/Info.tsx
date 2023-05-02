import styled from 'styled-components';
import { CountryInfo } from '../interfaces/country-info';

const Wrapper = styled.section``;

const InfoImage = styled.img``;

const InfoTitle = styled.h1``;

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

type InfoProps = CountryInfo;

export const Info = (props: InfoProps) => {
  const commonName = props.name.common;
  const { flags, population, capital, region, subregion, tld, currencies, languages, borders } =
    props;

  const languagesList = Object.keys(languages);
  const currenciesList = Object.keys(currencies);
  const nativeName = props.name.nativeName[languagesList[0]].common;

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
      </div>
    </Wrapper>
  );
};
