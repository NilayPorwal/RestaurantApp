import {combineReducers} from 'redux';
import {
  RESTAURANTS_LIST,
  LOADING
} from "../actions";

const initialState ={
  loading:false,
  restaurantsList:[]
  
}

function results(state = initialState, action) {
  switch (action.type) {
    case RESTAURANTS_LIST:
      return {...state, restaurantsList:action.results};
    case LOADING:
        return {...state, loading:action.value};  
    default:
      return initialState;
  }
}

const rootReducer = combineReducers({
  results,
});

export default rootReducer;