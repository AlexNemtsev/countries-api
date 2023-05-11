import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import { useState } from 'react';
import { CountryData } from './interfaces/country-data';

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<HomePage countries={countries} setCountries={setCountries} />}
          ></Route>
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
