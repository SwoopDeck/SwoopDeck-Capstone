import axios from 'axios';

let initialState = [];

/* ACTION TYPES */

let SET_JUMPS = 'SET_JUMPS';
let DELETE_JUMP = 'DELETE_JUMP';
let UPDATE_JUMP = 'UPDATE_JUMP';
let ADD_JUMP = 'ADD_JUMP';
let ADD_JUMP_MANUAL = 'ADD_JUMP_MANUAL';
const SET_SINGLE_JUMP = 'SET_SINGLE_JUMP';
let SET_ALL_JUMPERS_ON_LOAD = 'SET_ALL_JUMPERS_ON_LOAD';
let UPDATE_LOAD = 'UPDATE_LOAD';

/* ACTION CREATORS */ 

//SET ALL JUMP RECORDS
export const setAllJumps = (JUMPS) => {
  return {
    type: SET_JUMPS,
    JUMPS,
  };
};

//SET ALL JUMPERS ON LOAD
export const setAllJumpersOnLoad = (USERS) => {
  return {
    type: SET_ALL_JUMPERS_ON_LOAD,
    USERS,
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


//ADD SINGLE JUMP RECORD MANUALLY
export const addJumpManual = (JUMP) => {
  return {
    type: ADD_JUMP_MANUAL,
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

//UPDATE A SINGLE LOADS RECORD
export const reformLoad = (LOAD) => {
  return {
    type: UPDATE_LOAD,
    LOAD,
  };
};

//DELETE A SINGLE JUMP RECORD
export const removeJump = (JUMP) => {
  return {
    type: DELETE_JUMP,
    JUMP,
    // id,
  };
};

/* THUNKS */

//THUNK: FETCH ALL JUMP RECORDS
export const Thunk_fetchAllJumpRecords = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/jumprecords/${id}/jumps/`);
      dispatch(setAllJumps(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//THUNK: FETCH ALL JUMPERS ON LOAD
export const Thunk_fetchAllJumpersOnLoad = (loadId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/jumprecords/loadList/${loadId}`);
      dispatch(setAllJumpersOnLoad(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// THUNK: FETCH SINGLE JUMP RECORD
export const Thunk_fetchSingleJump = (userId, jumpId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/api/jumprecords/${userId}/jumps/${jumpId}`
      );
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
      const { data } = await axios.post(`/api/jumprecords/${id}/create/`, JUMP);
      dispatch(addJump(data));
    } catch (err) {
      console.log(err);
    }
  };
};



//THUNK: ADD A NEW JUMP RECORD MANUALLY
export const Thunk_createJumpManually = (JUMP, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/jumprecords/${id}/create/manual`, JUMP);
      dispatch(addJumpManual(data));
    } catch (err) {
      console.log(err);
    }
  };
}; 
//THUNK: UPDATE A SINGLE JUMP RECORD
export const Thunk_updateJump = (JUMP, id, jumpId) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/jumprecords/${id}/${jumpId}`, JUMP);
    dispatch(reformJump(data));
  };
};

//THUNK: UPDATE A SINGLE LOADS JUMPER LIST
export const thunk_updateLoad = (userId, loadId) => {
  return async (dispatch) => {
    await axios.put(`/api/loads/${loadId}/${userId}`);
    dispatch(reformLoad(userId));
  };
};

//THUNK: DELETE A SINGLE JUMP RECORD
export const Thunk_deleteJump = (id, jumpId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/jumprecords/${id}/${jumpId}`);
      dispatch(removeJump(data));
    } catch (err) {
      console.log(err);
    }
  };
};

/* REDUCERS */
[{}, {}, {}, {}];
export default function jumpRecordsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_JUMPS:
      return action.JUMPS;
    case SET_ALL_JUMPERS_ON_LOAD:
      return action.USERS;
    case SET_SINGLE_JUMP:
      return action.JUMP;
    case ADD_JUMP:
      return action.JUMP;
    case ADD_JUMP_MANUAL:
      return action.JUMP;  
    case UPDATE_JUMP:
      return action.JUMP;
      case UPDATE_LOAD:
        console.log(action.LOAD)
        return state.filter((jumper)=> jumper.id !== action.LOAD)
    // return state.map((record) =>
    //   record.id === action.JUMP.id ? action.record : record
    // );
    case DELETE_JUMP:
      return action.JUMP;
    // return state.filter((log) => log.id !== action.id);
    default:
      return state;
  }
}
