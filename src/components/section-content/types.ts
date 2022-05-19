import { FC, NamedExoticComponent } from 'react';

export interface INavigationList {
  id: number;
  text: string;
  path: string;
  component: FC | NamedExoticComponent;
}

export interface IGenreSelectionProps {
  type: string;
}