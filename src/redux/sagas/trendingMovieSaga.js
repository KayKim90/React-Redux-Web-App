import axiosInstance from '../../middleware/axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';

function getTrendingMovies() {
  return axiosInstance
    .get(`/trending/movie/week?`)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log('error: ' + error);
      return error;
    });
}

function* fetchTrendingMovies() {
  try {
    const movies = yield call(getTrendingMovies);
    yield delay(500);
    yield put({ type: 'GET_MOVIES_TRENDING_SUCCESS', results: movies });
  } catch (e) {
    yield put({ type: 'GET_MOVIES_TRENDING_FAILED', message: e.message });
  }
}

export default function* TrendingMovieSaga() {
  yield takeEvery('GET_MOVIES_TRENDING_REQUESTED', fetchTrendingMovies);
}
