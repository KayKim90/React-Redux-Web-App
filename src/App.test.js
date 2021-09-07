import { render } from '@testing-library/react';
import {saveMoviesTrending} from './redux/actions/trendingMovies';
import trendingMovieReducer from './redux/reducers/trendingMovies';
import Navbar from './components/Navbar';

// Action generating function testing
describe('saveMoviesTrending', () => {
  describe('actions', () => {
    it('should create actions', () => {
      const action = saveMoviesTrending();
      console.log(action)
      expect(action).toEqual({
        type: 'GET_MOVIES_TRENDING_REQUESTED',
      });
    });
  });
  describe('reducer', () => {
    it('should return inital state when passing empty array', () => {
      let state = trendingMovieReducer(undefined, {})
      expect(state).toEqual({
        results: [],
        loading: false,
        error: null
      });
    });
  });
  // ...and so on...
});

//Component Testing
describe('<Navbar />', () => {
  it('should render succesfully', () => {
    const nav = render(<Navbar />);
    expect(nav).toBeTruthy()
  });
});