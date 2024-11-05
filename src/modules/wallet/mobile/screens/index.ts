import type { NavigationMapper } from '@core/navigation/interfaces';
import HomeWallet from '@modules/wallet/mobile/screens/Home';

export default function WalletScreens(navigationMapper: NavigationMapper) {
  navigationMapper.addScreen({
    name: 'wallet/home',
    component: HomeWallet,
    isPrivate: true,
  });
}

export interface WalletScreensMapper {
  'wallet/home': void;
}
