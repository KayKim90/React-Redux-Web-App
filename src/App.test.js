import { render, screen } from '@testing-library/react';
import MovieList from './components/MovieList';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
// test('renders learn react link', () => {
//   render(<Navbar />);
//   const linkElement = screen.getByText(
//     /Movie and TV Show React-Redux Web Application/i,
//   );
//   expect(linkElement).toBeInTheDocument();
// });

// Tests for actions
describe('dataloader actions', () => {
  test('dataRequested', () => {
    const payload = {
      session: { sessionId: 'sid' },
    };
    const action = dataLoaderActions.requestData(payload);
    expect(action).toEqual({
      payload: payload,
      type: 'DATA_LOADER/REQUEST_DATA',
    });
  });

  test('set loading', () => {
    const payload = 'drid';
    const action = dataLoaderActions.setDataLoading(payload);
    expect(action).toEqual({
      payload: payload,
      type: 'DATA_LOADER/SET_DATA_LOADING',
    });
  });

  // ...and so on...
});
