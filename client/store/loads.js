import axios from "axios"

let initialState = [];

/* ACTION TYPES */ 

let SET_LOADS = "SET_LOADS";
let DELETE_LOADS = "DELETE_LOADS";
let UPDATE_LOADS = "UPDATE_LOADS";
let ADD_LOADS = "ADD_LOADS";
const SET_SINGLE_LOADS = "SET_SINGLE_LOADS";

/* ACTION CREATORS */ 

//SET ALL LOADS RECORDS
export const setAllLoads = (LOADS) => {
  return {
    type: SET_LOADS,
    LOADS,
  };
};


//SET SINGLE LOADS RECORD
export const setSingleLoad = (LOADS) => {
  return {
    type: SET_SINGLE_LOADS,
    LOADS,
  };
};

//ADD SINGLE LOADS RECORD
export const addLoad = (LOADS) => {
  return {
    type: ADD_LOADS,
    LOADS,
  };
};

//UPDATE A SINGLE LOADS RECORD
export const reformLoad = (LOADS) => {
  return {
    type: UPDATE_LOADS,
    LOADS,
  };
};

//DELETE A SINGLE LOADS RECORD
export const removeLoad = (LOADS) => {
  console.log(LOADS)
  return {
    type: DELETE_LOADS,
    LOADS,
  };
};


/* THUNKS */ 

//THUNK: FETCH ALL LOADS RECORDS
export const thunk_fetchAllLoads = (dropzoneId) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`api/loads/${dropzoneId}`);
        dispatch(setAllLoads(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

// THUNK: FETCH SINGLE LOADS RECORD
export const thunk_fetchSingleLoad = (dropzoneId, loadId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/loads/${dropzoneId}/${loadId}`);
      dispatch(setSingleLoad(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//THUNK: UPDATE A SINGLE LOADS RECORD
export const thunk_updateLoad = (dropzoneId, loadId) => {
  return async (dispatch) => {
    const { data } = await axios.put(`api/loads/${dropzoneId}/${loadId}`, LOADS);
    dispatch(reformLoad(data));
  };
};

//THUNK: ADD A NEW LOADS 
export const thunk_createLoad = (LOAD, dropzoneId) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.post(`api/loads/${dropzoneId}/create`, LOAD);
        dispatch(addLoad(data));
      } catch (err) {
        console.log(err);
      }
    };
  };

//THUNK: DELETE A SINGLE LOADS RECORD
export const thunk_deleteLoad = (dropzoneId, loadId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`api/loads/${dropzoneId}/${loadId}`);
      dispatch(removeLoad(data));
    } catch (err) {
      console.log(err);
    }
  };
};


/* REDUCERS */ 
export default function LOADSRecordsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADS:
      return action.LOADS;
    case SET_SINGLE_LOADS:
      return action.LOADS;  
    case ADD_LOADS:
      return action.LOADS;
    case UPDATE_LOADS:
      return action.LOADS;
      // return state.map((record) =>
      //   record.id === action.LOADS.id ? action.record : record
      // );
    case DELETE_LOADS:
      return action.LOADS;
      // return state.filter((log) => log.id !== action.id);
    default:
      return state;
  }
}

