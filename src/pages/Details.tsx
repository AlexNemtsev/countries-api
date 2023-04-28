import { useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { searchByCountry } from '../libs/loader';
import { CountryInfo } from '../interfaces/country-info';
import BackButton from '../components/BackButton';

const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryInfo>();

  console.log(country);

  useEffect(() => {
    searchByCountry(name || '').then((data) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <BackButton to="/">
        <IoArrowBack /> Back
      </BackButton>
      Details {name}
    </div>
  );
};

export default Details;
