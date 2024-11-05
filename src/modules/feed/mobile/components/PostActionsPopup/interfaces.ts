export interface PostActionsPopupProps {
    close?: () => void;
    layout: ButtonLayout | null;
  }
  
  export interface PostActionsPopupRef {
    open: () => void;
    close: () => void;
  }
  
  
  export interface ButtonLayout {
    x: number;
    y: number;
    width: number;
    height: number;
  }