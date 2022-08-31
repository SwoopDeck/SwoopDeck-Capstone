import axios from 'axios';
import { me } from './auth';

/* ACTION TYPES */

const CREATE_USER = 'CREATE_USER';
const SET_USERS = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const SET_USER = 'SET_USER';

/* ACTION CREATORS */

// ADMIN: GET ALL USERS
export const _setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

// ADMIN: CREATE A NEW USER
export const _createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

// ADMIN: UPDATE A USER
export const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

// ADMIN: DELETE A USER
export const _deleteUser = (users) => {
  console.log('action creator', users);
  return {
    type: DELETE_USER,
    users,
  };
};

// GET A SINGLE USER
export const _setUser = (user) => ({
  type: SET_USER,
  user,
});

/* THUNKS */

// THUNK: GET A SINGLE USER
export const Thunk_fetchUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/users/${id}`);
  dispatch(_setUser(data));
};

// THUNK: CREATE A NEW USER
export const createUser = (user) => {
  return async (dispatch) => {
    console.log(user)
    const { data } = await axios.post('/api/users', user);
    // window.localStorage.setItem('token', token);
    dispatch(_createUser(data));
    // dispatch(me())
  };
};

// THUNK: UPDATE A USER
export const Thunk_updateUser = (id, userData) => {
  return async (dispatch) => {
    try {
      console.log(userData);
      const { data: user } = await axios.put(`/api/users/${id}`, userData);
      dispatch(_updateUser(user));
    } catch (err) {
      console.error(err);
    }
  };
};

// THUNK: DELETE A USER
export const Thunk_deleteUser = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.delete(`/api/users/${id}`);
      dispatch(_deleteUser(data));
    } catch (err) {
      console.error(err);
    }
  };
};

// THUNK: FETCH ALL USERS
export const Thunk_fetchUsers = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { data } = await axios.get('/api/users', {
          headers: {
            authorization: token,
          },
        });
        await dispatch(_setUsers(data));
      } else {
        console.log('Bad token 2');
      }
    } catch (err) {
      console.log(err);
    }
  };
};

/* REDUCERS */
const initialState = {
  allUsers: [],
  singleUser: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, allUsers: [...state.allUsers, action.user] };
    case SET_USERS:
      return { ...state, allUsers: action.users };
    case SET_USER:
      return { ...state, singleUser: action.user };
    case UPDATE_USER:
      return { ...state, allUsers: [...state.allUsers, action.user] };
    case DELETE_USER:
      console.log('saldkfjsaldkfj', state.allUsers);

      return {
        ...state,
        allUsers: action.users,
      };

    default:
      return state;
  }
}
