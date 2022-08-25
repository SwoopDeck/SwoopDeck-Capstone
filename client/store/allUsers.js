import axios from "axios";
import { me } from './auth'


/* ACTION TYPES */ 

const CREATE_USER = 'CREATE_USER';
const SET_USERS = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const SET_USER = 'SET_USER'


/* ACTION CREATORS */ 

export const _setUser = user => ({
  type: SET_USER,
  user
});

// GET ALL USERS
export const _setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

// CREATE A NEW USER
export const _createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

// UPDATE A USER
export const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

// DELETE A USER
export const _deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user,
  };
};



/* THUNKS */ 

// THUNK: CREATE A NEW USER
export const createUser = (user, history) => {
  return async (dispatch) => {
    const { data: token } = await axios.post('/api/users', user);
    window.localStorage.setItem('token', token);
    dispatch(_createUser(user));
    dispatch(me())
    history.push('/');
  };
};

// THUNK: UPDATE A USER
export const Thunk_updateUser = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.put(`/api/users/${id}`);
      dispatch(_updateUser(user));
      history.push('/users');
    } catch (err) {
      console.error(err);
    }
  };
};

// THUNK: DELETE A USER
export const Thunk_deleteUser = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.put(`/api/users/${id}`);
      dispatch(_deleteUser(user));
      history.push('/users');
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
        console.log('Bad token 2')
      }
    } catch (err) {
      console.log(err);
    }
  };
};


// THUNK: FETCH SINGLE USER
export const Thunk_fetchUser = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/users/${id}`)
  dispatch(_setUser(data));
}


/* REDUCERS */ 
const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user];
    case SET_USER: 
    console.log(action.user)
      return action.user
    case SET_USERS:
      return action.users;
    case UPDATE_USER:
      return action.user;
    case DELETE_USER:
      return state.filter((users) => users.id !== action.users.id);
    default:
      return state;
  }
}