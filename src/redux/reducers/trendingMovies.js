import * as type from '../type';

const initialState = {
  results: [],
  loading: false,
  error: null
};

export default function trendingMovieReducer(state = initialState, action) {
  switch(action.type) {
    case type.GET_MOVIES_TRENDING_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_MOVIES_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.results.results
      }
    case type.GET_MOVIES_TRENDING_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default: 
      return state
  }
}

