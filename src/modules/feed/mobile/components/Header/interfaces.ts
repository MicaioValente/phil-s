import { FC, ReactNode } from 'react';

export type HeaderComponent = FC<HeaderProps> & {
  IconBack: FC;
  Text: FC<HeaderTextProps>;
  IconRight: FC<HeaderIconRightProps>;
};

export interface HeaderProps {
  children: ReactNode;
}

export interface HeaderTextProps {
  children: ReactNode;
}

export interface HeaderIconRightProps {
  children: ReactNode;
}
