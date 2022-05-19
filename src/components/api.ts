import wretch from 'wretch';
import { ITestData } from "./types";

export const apiGetValues = (): Promise<ITestData[]> =>
  wretch('https://jsonplaceholder.typicode.com/todos/1').get().json();
