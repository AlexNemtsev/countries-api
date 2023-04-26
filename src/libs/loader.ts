import { CountryData } from '../interfaces/country-data';

const baseUrl = 'https://restcountries.com/v3.1/';

const getAllCountries = async (): Promise<CountryData[]> => {
  const url = baseUrl + 'all?fields=name,capital,flags,population,region';
  const response = await fetch(url, { method: 'GET' });
  return (await response.json()) as CountryData[];
};

class Loader {
  private static baseUrl = 'https://restcountries.com/v3.1/';

  static async getAllCountries(): Promise<CountryData[]> {
    const url = Loader.baseUrl + 'all?fields=name,capital,flags,population,region';
    const response = await fetch(url, { method: 'GET' });
    return (await response.json()) as CountryData[];
  }

  static searchByCountry(name: string) {
    const url = Loader.baseUrl + 'name/' + name;
  }

  static filterByCodes(codes: string[]) {
    const url = Loader.baseUrl + 'alpha?codes=' + codes.join(',');
  }
}

export { getAllCountries };
