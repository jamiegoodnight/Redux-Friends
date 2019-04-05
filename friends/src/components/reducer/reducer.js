import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
   } from '../actions/actions'
  
  const initialState = {
    friends: [],
    loading: true,
    error: null
    // Array characters, Boolean fetching, null error.
  };
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FRIENDS_START:
      return {
        ...state,
        loading: true,
        error: null
      }
      case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        loading: false,
        error: null
      }
      case FETCH_FRIENDS_FAILURE:
      return {
        ...state, 
        loading: false,
        error: action.payload
  
      }
      default:
        return state;
    }
  };
  
  export default reducer