import axios from "axios"

let initialState = [];

let SET_JUMPS = "SET_JUMPS";
let DELETE_JUMP = "DELETE_JUMP";
let UPDATE_JUMP = "UPDATE_JUMP";
let ADD_JUMP = "ADD_JUMP";
const SET_SINGLE_JUMP = "SET_SINGLE_JUMP";

//ACTION CREATOR: SET ALL JUMPS
export const setAllJumps = (JUMPS) => {
  return {
    type: SET_JUMPS,
    JUMPS,
  };
};

//THUNK: GRAB ALL JUMPS
export const fetchAllJumps = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/api/users/${id}/jumps`);
        dispatch(setAllJumps(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

export const setSingleJump = (JUMP) => {
  return {
    type: SET_SINGLE_JUMP,
    JUMP,
  };
};

export const fetchSingleJump = (userId, jumpId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/jumps/${jumpId}`);
      dispatch(setSingleJump(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//ADD JUMP 
export const addJump = (JUMP) => {
  return {
    type: ADD_JUMP,
    JUMP,
  };
};
//THUNK ADD JUMP
export const createJump = (JUMP, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/users/${id}/create/`, JUMP);
      dispatch(addJump(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//UPDATE JUMP 
export const reformJump = (JUMP) => {
  return {
    type: UPDATE_JUMP,
    JUMP,
  };
};
//THUNK: PUT REQUEST
export const updateJump = (JUMP, id, jumpId) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/jumps/${id}/${jumpId}`, JUMP);
    dispatch(reformJump(data));
  };
};

//ACTION CREATOR: REMOVE A JUMP
export const removeJump = (id) => {
  return {
    type: DELETE_JUMP,
    id,
  };
};
//THUNK: DELETE REQUEST
export const deleteJump = (id, jumpId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/users/${id}/${jumpId}`);
      dispatch(removeJump(jumpId));
    } catch (err) {
      console.log(err);
    }
  };
};


//REDUCER
export default function jumpReducer(state = initialState, action) {
  switch (action.type) {
    case SET_JUMPS:
      return action.JUMPS;
    case SET_SINGLE_JUMP:
      return action.JUMP;  
    case ADD_JUMP:
      return [...state, action.JUMP];
    case UPDATE_JUMP:
      return action.JUMP
    case DELETE_JUMP:
      return state.filter((log) => log.id !== action.id);
    default:
      return state;
  }
}
