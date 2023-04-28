import { CountryData } from '../interfaces/country-data';
import { CountryInfo } from '../interfaces/country-info';

const baseUrl = 'https://restcountries.com/v3.1/';

const getAllCountries = async (): Promise<CountryData[]> => {
  const url = baseUrl + 'all?fields=name,capital,flags,population,region';
  const response = await fetch(url, { method: 'GET' });
  return (await response.json()) as CountryData[];
};

const searchByCountry = async (name: string): Promise<CountryInfo[]> => {
  const url = baseUrl + 'name/' + name;
  const response = await fetch(url, { method: 'GET' });
  return (await response.json()) as CountryInfo[];
};

class Loader {
  private static baseUrl = 'https://restcountries.com/v3.1/';

  static filterByCodes(codes: string[]) {
    const url = Loader.baseUrl + 'alpha?codes=' + codes.join(',');
  }
}

export { getAllCountries, searchByCountry };
