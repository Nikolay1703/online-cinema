import { all } from 'redux-saga/effects';
import { mainPageWatchers } from '../components/sagas';

export function* rootSaga() {
    yield all([
      mainPageWatchers()
    ]);
  }