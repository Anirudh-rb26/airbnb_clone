import { register } from "module";
import { format } from "path";
import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latLang: country.latlng,
  region: country.region,
}));

export const useCountries = () => {
  const getAllCountries = () => formattedCountries;
  const getCountrybyValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return { getAllCountries, getCountrybyValue };
};
