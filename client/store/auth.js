import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({type: SET_AUTH, auth})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  console.log('USER in store/auth me function')
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

/**
 * THUNK CREATORS
 */
 export const meDZ = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  console.log('DROPZONE in store/auth meDZ function')
  if (token) {
    const res = await axios.get('/auth/dz/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticate = (email, password, method) => async (dispatch) => {
  try {
    console.log('USER in store/auth, authenticate function', 20)
    const res = await axios.post(`/auth/${method}`, { email, password });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
    history.push('/');
  } catch (authError) {
    if (
      authError.response &&
      authError.response.data &&
      authError.response.data.message
    ) {
      return dispatch(setAuth({ error: authError.response.data.message }));
    } else {
      return dispatch(setAuth({ error: 'An error has occurred' }));
    }
  }
};

export const authenticateDZ = (email, password, method) => async (dispatch) => {
  try {
    console.log('DROPZONE in store/auth, authenticate function')
    const res = await axios.post(`/auth/dz/${method}`, { email, password });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(meDZ());
    history.push('/');
  } catch (authError) {
    if (
      authError.response &&
      authError.response.data &&
      authError.response.data.message
    ) {
      return dispatch(setAuth({ error: authError.response.data.message }));
    } else {
      return dispatch(setAuth({ error: 'An error has occurred' }));
    }
  }
};

export const logout = () => {
  console.log('in store/auth logout function')
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      console.log(action.auth)
      return action.auth
    default:
      return state
  }
}
