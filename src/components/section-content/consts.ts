import { Films } from "./Films";
import { Serial } from "./Serial";
import { INavigationList } from "./types";

export const NAVIGATION_LIST: INavigationList[] = [
  {
    id: 1,
    text: 'Комедии',
    path: "comedy",
    component: Films,
  },
  {
    id: 2,
    text: 'Мультфильмы',
    path: "cartoons",
    component: Serial,
  },
  {
    id: 3,
    text: 'Боевики',
    path: "militants",
    component: Films,
  },
  {
    id: 4,
    text: 'Триллеры',
    path: "thrillers",
    component: Films,
  },
  {
    id: 5,
    text: 'Детективы',
    path: "detectives",
    component: Films,
  },
  {
    id: 6,
    text: 'Ужасы',
    path: "horror",
    component: Films,
  },
  {
    id: 7,
    text: 'Фантастика',
    path: "fantasy",
    component: Films,
  },
  {
    id: 8,
    text: 'Мелодрамы',
    path: "melodramas",
    component: Films,
  },
  {
    id: 9,
    text: 'Приключения',
    path: "adventures",
    component: Films,
  },
  {
    id: 10,
    text: 'Документальные',
    path: "documentaries",
    component: Films,
  },
];