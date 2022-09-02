// import axios from 'axios';

// let initialState = [];

// /* ACTION TYPES */

// let SET_LOADS = 'SET_LOADS';
// let DELETE_LOAD = 'DELETE_LOAD';
// let UPDATE_LOAD = 'UPDATE_LOAD';
// let ADD_LOAD = 'ADD_LOAD';
// const SET_SINGLE_LOAD = 'SET_SINGLE_LOAD';

// /* ACTION CREATORS */

// //SET ALL LOADS RECORDS
// export const setAllLoads = (LOADS) => {
//   return {
//     type: SET_LOADS,
//     LOADS,
//   };
// };

// //SET SINGLE LOADS RECORD
// export const setSingleLoad = (LOAD) => {
//   return {
//     type: SET_SINGLE_LOAD,
//     LOAD,
//   };
// };

// //ADD SINGLE LOADS RECORD
// export const addLoad = (LOAD) => {
//   return {
//     type: ADD_LOAD,
//     LOAD,
//   };
// };

// //UPDATE A SINGLE LOADS RECORD
// export const reformLoad = (LOAD) => {
//   return {
//     type: UPDATE_LOAD,
//     LOAD,
//   };
// };

// //DELETE A SINGLE LOADS RECORD
// export const removeLoad = (LOAD) => {
//   return {
//     type: DELETE_LOAD,
//     LOAD,
//   };
// };

// /* THUNKS */

// //THUNK: FETCH ALL LOADS RECORDS

// // export const thunk_fetchAllLoads = (dropzoneId) => {
// //   return async (dispatch) => {
// //     try {
// //       const { data } = await axios.get(`/api/loads/${dropzoneId}`);
// //       dispatch(setAllLoads(data));
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// export const thunk_fetchAllLoads = (dropzoneId) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/loads/${dropzoneId}`);
//     dispatch(setAllLoads(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

// // THUNK: FETCH SINGLE LOADS RECORD
// export const thunk_fetchSingleLoad = (dropzoneId, loadId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/api/loads/${dropzoneId}/${loadId}`);
//       dispatch(setSingleLoad(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// //THUNK: UPDATE A SINGLE LOADS RECORD
// export const thunk_updateLoad = (dropzoneId, loadId, LOAD) => {
//   return async (dispatch) => {
//     const { data } = await axios.put(
//       `/api/loads/${dropzoneId}/${loadId}`,
//       LOAD
//     );
//     dispatch(reformLoad(data));
//   };
// };

// //THUNK: ADD A NEW LOADS
// export const thunk_createLoad = (LOAD, dropzoneId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         `/api/loads/${dropzoneId}/create`,
//         LOAD
//       );
//       dispatch(addLoad(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// //THUNK: DELETE A SINGLE LOADS RECORD
// export const thunk_deleteLoad = (dropzoneId, loadId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.delete(`/api/loads/${dropzoneId}/${loadId}`);
//       dispatch(removeLoad(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// /* REDUCERS */
// export default function loadsReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_LOADS:
//       return action.LOADS;
//     case SET_SINGLE_LOAD:
//       return action.LOAD;
//     case ADD_LOAD:
//       return action.LOAD;
//     case UPDATE_LOAD:
//       return action.LOAD;
//     // return state.map((record) =>
//     //   record.id === action.LOADS.id ? action.record : record
//     // );
//     case DELETE_LOAD:
//       return action.LOAD;
//     // return state.filter((log) => log.id !== action.id);
//     default:
//       return state;
//   }
// }

import axios from 'axios';

// let initialState = [];

/* ACTION TYPES */

let SET_LOADS = 'SET_LOADS';
let SET_ADMIN_LOADS = 'SET_ADMIN_LOADS';
let DELETE_LOAD = 'DELETE_LOAD';
let UPDATE_LOAD_SLOTS_FILLED = 'UPDATE_LOAD_SLOTS_FILLED';
let UPDATE_LOAD = 'UPDATE_LOAD';
let UPDATE_LOAD_STATUS = 'UPDATE_LOAD_STATUS';
let ADD_LOAD = 'ADD_LOAD';
const SET_SINGLE_LOAD = 'SET_SINGLE_LOAD';

/* ACTION CREATORS */

//SET ADMIN LOADS (EVERY LOAD)
export const adminSetAllLoads = (LOADS) => {
  return {
    type: SET_LOADS,
    LOADS,
  };
};

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

//UPDATE A SINGLE LOADS RECORD
export const reformLoadSlotsFilled = (LOAD) => {
  console.log(LOAD);
  return {
    type: UPDATE_LOAD_SLOTS_FILLED,
    LOAD,
  };
};

//UPDATE A SINGLE LOADS RECORD
export const reformLoadStatus = (LOAD) => {
  return {
    type: UPDATE_LOAD_STATUS,
    LOAD,
  };
};

//DELETE A SINGLE LOADS RECORD
export const removeLoad = (LOADS) => {
  return {
    type: DELETE_LOAD,
    LOADS,
  };
};

/* THUNKS */

//THUNK: FETCH ALL LOADS RECORDS

// export const thunk_fetchAllLoads = (dropzoneId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/api/loads/${dropzoneId}`);
//       dispatch(setAllLoads(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };

/////////////////FETCH ALL OF A DROPZONES LOADS/////////////////////

export const thunk_fetchAllLoads = (dropzoneId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/loads/${dropzoneId}`);
    dispatch(setAllLoads(data));
  } catch (err) {
    console.log(err);
  }
};
/////////////////FETCH ALL LOADS/////////////////////

export const thunk_adminFetchAllLoads = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/loads/`);
    dispatch(adminSetAllLoads(data));
  } catch (err) {
    console.log(err);
  }
};

// THUNK: FETCH SINGLE LOADS RECORD
export const thunk_fetchSingleLoad = (dropzoneId, loadId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/loads/${dropzoneId}/${loadId}`);
      dispatch(setSingleLoad(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//THUNK: UPDATE A SINGLE LOADS JUMPER LIST
export const thunk_updateLoad = (userId, loadId) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/loads/${loadId}/${userId}`);
    dispatch(reformLoad(data));
  };
};

//THUNK: UPDATE A SINGLE LOAD SLOT FILLED
export const thunk_updateLoadSlotsFilled = (dropzoneId, loadId) => {
  return async (dispatch) => {
    const { data } = await axios.put(
      `/api/loads/slotFilled/${dropzoneId}/${loadId}`
    );
    dispatch(reformLoadSlotsFilled(data));
  };
};

//THUNK: UPDATE A SINGLE LOADS STATUS
export const thunk_updateLoadStatus = (condition, loadId) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/loads/status/${loadId}`, condition);
    dispatch(reformLoadStatus(data));
  };
};

//THUNK: ADD A NEW LOADS
export const thunk_createLoad = (LOAD, dropzoneId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/loads/${dropzoneId}/create`,
        LOAD
      );
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
      const { data } = await axios.delete(`/api/loads/${dropzoneId}/${loadId}`);
      dispatch(removeLoad(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  allLoads: [],
  singleLoad: {},
};

/* REDUCERS */
export default function loadsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADS:
      return { ...state, allLoads: action.LOADS };
    case SET_ADMIN_LOADS:
      return { ...state, allLoads: action.LOADS };
    case SET_SINGLE_LOAD:
      return { ...state, singleLoad: action.LOAD };
    case ADD_LOAD:
      return { ...state, singleLoad: action.LOAD };
    case UPDATE_LOAD:
      return {
        ...state,
        allLoads: [...state.allLoads, action.LOAD],
      };
    case UPDATE_LOAD_STATUS:
      return { ...state, singleLoad: action.LOAD };
    case UPDATE_LOAD_SLOTS_FILLED:
      console.log('reducer state', state);
      return {
        ...state,
        allLoads: [...state.allLoads, action.LOAD],
      };
    // return {
    //   ...state.allLoads,
    //   allLoads: [
    //     state.allLoads.map((LOAD) =>
    //       LOAD.id == action.LOAD.id ? action.LOAD : LOAD
    //     ),
    //   ],
    // };
    case DELETE_LOAD:
      // return {
      //   ...state,
      //   allLOADS: state.allLoads.filter((LOADS) => LOADS.id !== action.LOAD.id),
      // };
      return { ...state, allLoads: action.LOADS };
    default:
      return state;
  }
}

// /* REDUCERS */
// export default function loadsReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_LOADS:
//       return action.LOADS;
//     case SET_SINGLE_LOAD:
//       return action.LOAD;
//     case ADD_LOAD:
//       return action.LOAD;
//     case UPDATE_LOAD:
//       return action.LOAD;
//     // return state.map((record) =>
//     //   record.id === action.LOADS.id ? action.record : record
//     // );
//     case DELETE_LOAD:
//       return action.LOAD;
//     // return state.filter((log) => log.id !== action.id);
//     default:
//       return state;
//   }
// }
