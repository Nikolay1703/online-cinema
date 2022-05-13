import { IMainMenu } from "./types";

export const itemNames: IMainMenu[] = [
  { id: 1, title: 'Главная', urlText: '/' },
  { id: 2, title: 'Фильмы', urlText: '/films' },
  { id: 3, title: 'Сериалы', urlText: '/serial' },
  { id: 4, title: 'Календарь релизов', urlText: '/release' },
  { id: 5, title: 'Рейтинг', urlText: '/rating' },
];

export const CONTENT_TYPE = {
  FILMS: 'films',
  SERIAL: 'serial',
};