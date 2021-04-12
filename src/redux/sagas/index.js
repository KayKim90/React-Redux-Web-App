import { all } from 'redux-saga/effects';
import trendingMovieSaga from './trendingMovieSaga';
import searchDataSaga from './searchDataSaga';

export default function* rootSaga() {
  yield all([trendingMovieSaga(), searchDataSaga()]);
}
