import { FC, ReactNode } from 'react';
import { ButtonProps, InputProps } from 'tamagui';

export type SendInputComponent = FC<SendInputProps> & {
  Avatar: FC;
  ContainerInput: FC<ContainerInputProps>
  Input: FC<InputProps>
  ContainerIcons: FC<ContainerIconsProps>
  SendButton: FC<ButtonProps>
};

export interface SendInputProps {
  children: ReactNode;
}

export interface ContainerInputProps {
    children: ReactNode;
}


export interface ContainerIconsProps {
    children: ReactNode;
}


