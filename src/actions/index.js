export const RESTAURANTS_LIST = 'RESTAURANTS_LIST';
export const LOADING = 'LOADING';

export function restaurantsList(results) {
  return {
    type: RESTAURANTS_LIST,
    results
  }
}

export function loading(value) {
  return {
    type: LOADING,
    value
  }
}