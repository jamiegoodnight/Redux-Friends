import axios from 'axios'
import axiosWithAuth from '../../axiosWithAuth'

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const ADD_FRIEND= 'ADD_FRIEND';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const LOGIN_START = 'LOGIN_START';
// export const GET_DATA = 'GET_DATA';
// export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'



export const fetchFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START});
    axios 
     .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") }
      })
    .then( res => {
        console.log(res)
        dispatch({type: FETCH_FRIENDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: FETCH_FRIENDS_FAILURE, payload: "error"})
    })
}   

export const addFriend = newFriend => dispatch => {  
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log(res.data);
        dispatch({ type: ADD_FRIEND, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
      });
  };

// export const login = creds => dispatch => {
//     dispatch({ type: LOGIN });
//     return axios
//     .post('http://localhost:5000/api/login', creds).then(res => {
//         localStorage.setItem('token', res.data.payload)
//     })
// }

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post("http://localhost:5000/api/login", creds).then(res => {
        console.log(res)
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
      fetchFriends();
    });
  };
  
//   export const getData = () => dispatch => {
//     dispatch({type: GET_DATA})
//     axios
//       .get("http://localhost:5000/api/friends", {
//         headers: { Authorization: localStorage.getItem("token") }
//       })
//       .then(res => {
//         console.log(res.data);
//         dispatch({type: GET_DATA_SUCCESS, payload: res.data.payload})
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };