import React, { ReactNode } from "react";
import { ButtonProps, StackProps } from "tamagui";

export type ActionsComponent = React.FC<ActionsProps> & {
    SmallLeftButton: React.FC<ActionsType>
    SmallRightButton: React.FC<ActionsType>
    MediumLeftButton: React.FC<ActionsType>
    MediumRightButton: React.FC<ActionsType>
}

export interface ActionsType extends ButtonProps {
    type: 'add' | 'qr-code' | 'email' | 'eye' | 'subscribe' | 'edit' | 'following' | 'share'
    isLinearGradientEnable?: boolean,
    loading?: boolean
}


export interface ActionsProps extends StackProps {
    children: ReactNode
}