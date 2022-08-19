import axios from "axios"

let initialState = [];

/* ACTION TYPES */ 

let SET_LOADS = "SET_LOADS";
let DELETE_LOAD = "DELETE_LOAD";
let UPDATE_LOAD = "UPDATE_LOAD";
let ADD_LOAD = "ADD_LOAD";
const SET_SINGLE_LOAD = "SET_SINGLE_LOAD";

/* ACTION CREATORS */ 

//SET ALL LOADS RECORDS
export const setAllLoads = (LOADS) => {
  return {
    type: SET_LOADS,
    LOADS,
  };
};


//SET SINGLE LOADS RECORD
export const setSingleLoad = (LOAD) => {
  return {
    type: SET_SINGLE_LOAD,
    LOAD,
  };
};

//ADD SINGLE LOADS RECORD
export const addLoad = (LOAD) => {
  return {
    type: ADD_LOAD,
    LOAD,
  };
};

//UPDATE A SINGLE LOADS RECORD
export const reformLoad = (LOAD) => {
  return {
    type: UPDATE_LOAD,
    LOAD,
  };
};

//DELETE A SINGLE LOADS RECORD
export const removeLoad = (LOAD) => {
  return {
    type: DELETE_LOAD,
    LOAD,
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
export default function loadsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADS:
      return action.LOADS;
    case SET_SINGLE_LOAD:
      return action.LOAD;  
    case ADD_LOAD:
      return action.LOAD;
    case UPDATE_LOAD:
      return action.LOAD;
      // return state.map((record) =>
      //   record.id === action.LOADS.id ? action.record : record
      // );
    case DELETE_LOAD:
      return action.LOAD;
      // return state.filter((log) => log.id !== action.id);
    default:
      return state;
  }
}

