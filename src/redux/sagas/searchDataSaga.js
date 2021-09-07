import axiosInstance from '../../middleware/axios';
import { call, put, takeEvery, delay } from 'redux-saga/effects';

function getSearchData(value) {
  const parmsValues = Object.values(value.payload);
  return axiosInstance
    .get(
      `/search/${
        parmsValues[0] === 'tv'
          ? 'tv'
          : parmsValues[0] === 'movie'
          ? 'movie'
          : 'multi'
      }?page=1&query=${parmsValues[1]}`,
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log('error: ' + error);
      return error;
    });
}

function* fetchSearchData(value) {
  try {
    const movies = yield call(getSearchData, value);
    yield delay(500);
    yield put({ type: 'GET_SEARCH_DATA_SUCCESS', results: movies });
  } catch (e) {
    yield put({ type: 'GET_SEARCH_DATA_FAILED', message: e.message });
  }
}

export default function* searchDataSaga() {
  yield takeEvery('GET_SEARCH_DATA_REQUESTED', fetchSearchData);
}
