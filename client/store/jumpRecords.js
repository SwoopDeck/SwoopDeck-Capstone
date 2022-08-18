import axios from "axios"

let initialState = [];


/* ACTION TYPES */ 

let SET_JUMPS = "SET_JUMPS";
let DELETE_JUMP = "DELETE_JUMP";
let UPDATE_JUMP = "UPDATE_JUMP";
let ADD_JUMP = "ADD_JUMP";
const SET_SINGLE_JUMP = "SET_SINGLE_JUMP";





/* ACTION CREATORS */ 

//SET ALL JUMP RECORDS
export const setAllJumps = (JUMPS) => {
  return {
    type: SET_JUMPS,
    JUMPS,
  };
};


//SET SINGLE JUMP RECORD
export const setSingleJump = (JUMP) => {
  return {
    type: SET_SINGLE_JUMP,
    JUMP,
  };
};


//ADD SINGLE JUMP RECORD
export const addJump = (JUMP) => {
  return {
    type: ADD_JUMP,
    JUMP,
  };
};


//UPDATE A SINGLE JUMP RECORD
export const reformJump = (JUMP) => {
  return {
    type: UPDATE_JUMP,
    JUMP,
  };
};


//DELETE A SINGLE JUMP RECORD
export const removeJump = (id) => {
  return {
    type: DELETE_JUMP,
    id,
  };
};




/* THUNKS */ 

//THUNK: FETCH ALL JUMP RECORDS
export const Thunk_fetchAllJumpRecords = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`/api/users/${id}/jumps`);
        dispatch(setAllJumps(data));
      } catch (err) {
        console.log(err);
      }
    };
  };


// THUNK: FETCH SINGLE JUMP RECORD
export const Thunk_fetchSingleJump = (userId, jumpId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/jumps/${jumpId}`);
      dispatch(setSingleJump(data));
    } catch (err) {
      console.log(err);
    }
  };
};


//THUNK: ADD A NEW JUMP RECORD
export const Thunk_createJump = (JUMP, id) => {
  return async (dispatch) => {
    try {
      console.log('thunk', JUMP)
      const { data } = await axios.post(`/api/users/${id}/create/`, JUMP);
      dispatch(addJump(data));
    } catch (err) {
      console.log(err);
    }
  };
};


//THUNK: UPDATE A SINGLE JUMP RECORD
export const Thunk_updateJump = (JUMP, id, jumpId) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/users/${id}/${jumpId}`, JUMP);
    dispatch(reformJump(data));
  };
};


//THUNK: DELETE A SINGLE JUMP RECORD
export const Thunk_deleteJump = (id, jumpId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/users/${id}/${jumpId}`);
      dispatch(removeJump(jumpId));
    } catch (err) {
      console.log(err);
    }
  };
};



/* REDUCERS */ 

export default function jumpRecordsReducer(state = initialState, action) {
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

