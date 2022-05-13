import { STATE_NAME } from "./consts";
import { IStateWithMainPage } from "./types";

export const mainPageSelector = (state: IStateWithMainPage) =>
  state[STATE_NAME];

export const menuItemIdSelector = (state: IStateWithMainPage) =>
  mainPageSelector(state).menuItemId;