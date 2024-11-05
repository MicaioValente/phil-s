import { useQuery } from '@infra/hooks';
import type { CountryCodeReturn } from '@modules/account/business/useCases/useCountryCode/interfaces';
import { countryCodeService } from '@modules/account/business/useCases/useCountryCode/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useCountryCode() {
  return useQuery<CountryCodeReturn[]>({
    initialData: [],
    queryKey: [QueryKeys.GET_COUNTRY_CODE],
    queryFn: countryCodeService,
  });
}
