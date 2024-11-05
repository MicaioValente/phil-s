import { ProfileScreensMapper } from '@modules/profile/mobile/screens';

export interface MenuListProps {
  label: string;
  route: keyof ProfileScreensMapper;
}
