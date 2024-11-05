import type { QueryParams } from '@infra/hooks/useQuery/interfaces';
import { httpClient } from '@infra/network';
import type {
  CountryCodeResponse,
  CountryCodeReturn,
} from '@modules/account/business/useCases/useCountryCode/interfaces';

export async function countryCodeService(
  _: QueryParams,
): Promise<CountryCodeReturn[]> {
  const response = await httpClient.get<CountryCodeResponse[]>(
    'https://restcountries.com/v3.1/all',
  );

  return response
    .filter(country => country.idd.suffixes)
    .map(country => ({
      id: country.name.common,
      name: country.name.common,
      acronym: country.cca2,
      code:
        country.idd.suffixes.length === 1
          ? `${country.idd.root}${country.idd.suffixes[0]}`
          : country.idd.root,
      flag: country.flags.png,
    }))
    .filter(country => country.code.length <= 4)
    .sort((a, b) => a.name.localeCompare(b.name));
}
