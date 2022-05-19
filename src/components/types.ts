import { STATE_NAME } from "./consts";

export interface IMainPageState {
  values: ITestData[];
}

export interface IStateWithMainPage {
  [STATE_NAME]: IMainPageState;
}

export interface ITestData {
  userId: number,
	id: number;
  title: string;
	completed: boolean;
}