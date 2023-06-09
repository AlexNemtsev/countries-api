export interface CountryData {
  capital: string[];
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  region: string;
}
