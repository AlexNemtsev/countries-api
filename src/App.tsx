import { useState, useEffect } from 'react';
import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { CountryData } from './interfaces/country-data';
import Loader from './libs/loader';
import List from './components/List';
import Card from './components/Card';

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    Loader.getAllCountries().then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name.common,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return <Card key={c.name.common} {...countryInfo} onClick={() => {}} />;
          })}
        </List>
      </Main>
    </>
  );
}

export default App;
