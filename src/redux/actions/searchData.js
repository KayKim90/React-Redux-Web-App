import * as type from '../type';

export function saveSearchData(payload) {
  return {
    type: type.GET_SEARCH_DATA_REQUESTED,
    payload: payload,
  };
}
