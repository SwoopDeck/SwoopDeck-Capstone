import axios from 'axios';

// /* ACTION TYPES */

let SET_DROPZONES = 'SET_DROPZONES';
let DELETE_DROPZONE = 'DELETE_DROPZONE';
let UPDATE_DROPZONE = 'UPDATE_DROPZONE';
let ADD_DROPZONE = 'ADD_DROPZONE';
const SET_SINGLE_DROPZONE = 'SET_SINGLE_DROPZONE';

/* ACTION CREATORS */

//SET ALL DROPZONES RECORDS
export const setAllDropzones = (DROPZONES) => {
  return {
    type: SET_DROPZONES,
    DROPZONES,
  };
};

//SET SINGLE DROPZONE
export const setSingleDropzone = (DROPZONE) => {
  return {
    type: SET_SINGLE_DROPZONE,
    DROPZONE,
  };
};

//ADD SINGLE DROPZONE
export const addDropzone = (DROPZONE) => {
  return {
    type: ADD_DROPZONE,
    DROPZONE,
  };
};

//UPDATE A SINGLE DROPZONE
export const reformDropzone = (DROPZONE) => {
  return {
    type: UPDATE_DROPZONE,
    DROPZONE,
  };
};

//DELETE A SINGLE DROPZONE
export const removeDropzone = (DROPZONE) => {
  return {
    type: DELETE_DROPZONE,
    DROPZONE,
  };
};

/* THUNKS */

//THUNK: FETCH ALL DROPZONES
export const thunk_fetchAllDropzones = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/dropzones/`);
      dispatch(setAllDropzones(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// THUNK: FETCH SINGLE DROPZONE
export const thunk_fetchSingleDropzone = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/dropzones/${id}`);
    dispatch(setSingleDropzone(data));
  } catch (err) {
    console.log(err);
  }
};

// export const  = (dropzoneId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`api/dropzones/${dropzoneId}`);
//       dispatch(setSingleDropzone(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

//THUNK: UPDATE A SINGLE DROPZONE
export const thunk_updateDropzone = (dropzoneId, DROPZONE) => {
  return async (dispatch) => {
    const { data } = await axios.put(`api/dropzones/${dropzoneId}`, DROPZONE);
    dispatch(reformDropzone(data));
  };
};

//THUNK: ADD A NEW DROPZONE
export const thunk_createDropzone = (DROPZONE) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`api/dropzones/create`, DROPZONE);
      dispatch(addDropzone(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//THUNK: DELETE A SINGLE DROPZONE RECORD
export const thunk_deleteDropzone = (dropzoneId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`api/dropzones/${dropzoneId}`);
      dispatch(removeDropzone(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  allDropzones: [],
  singleDropzone: {},
};

/* REDUCERS */
export default function dropzonesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DROPZONES:
      return { ...state, allDropzones: action.DROPZONES };
    case SET_SINGLE_DROPZONE:
      return { ...state, singleDropzone: action.DROPZONE };
    case ADD_DROPZONE:
      return { ...state, singleDropzone: action.DROPZONE };
    case UPDATE_DROPZONE:
      return {
        ...state,
        allDropzones: [...state.allDropzones, action.DROPZONE],
      };
    case DELETE_DROPZONE:
      return {
        ...state,
        allDropzones: state.allDropzones.filter(
          (dropzones) => dropzones.id !== action.DROPZONE.id
        ),
      };
    default:
      return state;
  }
}
