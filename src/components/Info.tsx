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
  const languages = Object.keys(props.languages);
  const nativeName = props.name.nativeName[languages[0]].common;
  const { flag, population, capital, region, subregion, tld, currencies, borders } = props;

  return (
    <Wrapper>
      <InfoImage src={flag} alt={commonName} />
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
              <b>Capital{capital.length > 1 ? 's' : ''}: </b>{' '}
              {capital.length > 1 ? capital.join(', ') : capital[0]}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain{tld.length > 1 ? 's' : ''}: </b>
              {tld.length > 1 ? tld.join(', ') : tld[0]}
            </ListItem>
          </List>
        </ListGroup>
      </div>
    </Wrapper>
  );
};
