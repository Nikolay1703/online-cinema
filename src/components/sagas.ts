import { put, takeEvery } from "redux-saga/effects";
import { call } from 'typed-redux-saga';
import { apiGetValues } from "./api";
import { mainPageActions } from "./store";
import { ITestData } from "./types";

export function* mainPageWatchers() {
  yield takeEvery(mainPageActions.getValues.type, getValues);
};

function* getValues() {
  try {
    alert(1);
    const data: ITestData[] = yield call(apiGetValues);
    yield put(mainPageActions.setValue(data));
  } catch (e) {
    console.log(e);
  }
}