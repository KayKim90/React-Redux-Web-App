import { combineReducers } from 'redux';
import trendingMovieReducer from './trendingMovies';
import searchDataReducer from './searchData';

const rootReducer = combineReducers({
  trendingMovieReducer,
  searchDataReducer,
});

export default rootReducer;
