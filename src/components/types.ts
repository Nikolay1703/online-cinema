import { STATE_NAME } from "./consts";

export interface IMainPageState {
  menuItemId: number;
}

export interface IStateWithMainPage {
  [STATE_NAME]: IMainPageState;
}