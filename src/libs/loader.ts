import { CountryData } from '../interfaces/country-data';

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

export default Loader;
