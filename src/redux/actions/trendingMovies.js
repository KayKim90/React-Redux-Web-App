import * as type from '../type';

export function saveMoviesTrending(movives) {
  return {
    type: type.GET_MOVIES_TRENDING_REQUESTED,
    payload: movives,
  };
}
//   const saveMoviesTrending = (payload) => ({
//     type: GET_MOVIES_TRENDING,
//     payload
//   });

// export const fetchMoviesTrending = () => ({
//   type: API_REQUEST,
//   payload: {
//     url: '/movie/now_playing',
//     onSuccess: saveMoviesTrending
//   }
// });

// export function fetchMoviesTrending() {
//     return {
//         type: API_REQUEST,
//         payload: {
//           url: '/movie/now_playing',
//           onSuccess: saveMovieTrending
//         }
//     }
// }
