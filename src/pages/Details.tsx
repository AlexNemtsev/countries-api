import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { searchByCountry } from '../libs/loader';
import { CountryInfo } from '../interfaces/country-info';
import BackButton from '../components/BackButton';
import { Info } from '../components/Info';

const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryInfo>();
  const navigate = useNavigate();

  useEffect(() => {
    searchByCountry(name || '').then((data) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <BackButton onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </BackButton>
      {country && <Info {...country} />}
    </div>
  );
};

export default Details;
