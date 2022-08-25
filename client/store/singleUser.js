import axios from 'axios'

// ACTION TYPES
const SET_USER = 'SET_USER'
const UPDATE_USER = 'UPDATE_USER';

// ACTION CREATORS 
export const _setUser = user => ({
  type: SET_USER,
  user
});

const _updateUser = user => {
  return {
    type: UPDATE_USER,
    user
  }
}

// THUNKS
export const fetchUser = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/users/${id}`)
  dispatch(_setUser(data));
}

export const updateUser = (user, id) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/users/${user.id}`, user);
      dispatch(_updateProduct(updated, user));
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
const initialState = {}

export default function singleUserReducer (state = initialState, action) {
  switch(action.type){
    case SET_USER: 
      return action.user
    case UPDATE_USER:
      return { ...action.user, user: action.user };
    default:
      return state
  }
}
