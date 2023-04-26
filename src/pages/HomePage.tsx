import { getAllCountries } from '../libs/loader';
import Card from '../components/Card';
import Controls from '../components/Controls';
import List from '../components/List';
import { CountryData } from '../interfaces/country-data';
import { useEffect, useState } from 'react';

interface HomePageProps {
  countries: CountryData[];
  setCountries: React.Dispatch<React.SetStateAction<CountryData[]>>;
}

const HomePage = ({ countries, setCountries }: HomePageProps) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search: string, region: string) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      getAllCountries().then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      });
    }
  }, [countries.length, setCountries]);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
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
          return <Card key={c.name.common} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
