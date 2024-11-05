import { ReactNode } from 'react';
import { ButtonProps, StackProps } from 'tamagui';

export type HeaderComponent = React.FC<HeaderProps> & {
  Top: React.FC<PositionProps>;
  Tag: React.FC<StackProps>
  Bottom: React.FC<PositionProps>;
  IconBack: React.FC<IconProps>;
  Avatar: React.FC<ImageComponentProps>;
  Wallpaper: React.FC<ImageComponentProps>;
  IconGrid: React.FC<IconProps>;
  IconMenu: React.FC<IconProps>;
  IconDotsHorizontal: React.FC<IconProps>;
  WallpaperEdit: React.FC<EditIconProps>;
  AddMoreIcon: React.FC<IconProps>;
  AvatarEdit: React.FC<EditIconProps>;
  Container: React.FC<{ children: ReactNode }>;
};

export type ContainerComponent = React.FC<{ children: ReactNode }>;

export interface HeaderProps extends StackProps {
  children: ReactNode;
}

export interface PositionProps {
  children: ReactNode;
}

export interface ImageComponentProps {
  url: string;
  isProtectedImage?: boolean;
  children?: ReactNode;
}

export interface AvatarIcon {
  isEdditing?: boolean;
}

export interface IconProps extends ButtonProps {
 
}


export interface EditIconProps {
  onChangePhoto: (typePhoto: 'avatar' | 'wallpaper', image: ImageProps) => void;
}



export interface ImageProps {
  base64: string;
  path: string;
  type: string;
}
