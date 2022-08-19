import axios from "axios"

let initialState = [];


// /* ACTION TYPES */ 

let SET_DROPZONES = 'SET_DROPZONES'
let DELETE_DROPZONE = "DELETE_DROPZONE";
let UPDATE_DROPZONE = "UPDATE_DROPZONE";
let ADD_DROPZONE = "ADD_DROPZONE";
const SET_SINGLE_DROPZONE = "SET_SINGLE_DROPZONE";





// /* ACTION CREATORS */ 

// //SET ALL JUMP RECORDS
// export const setAllJumps = (JUMPS) => {
//   return {
//     type: SET_JUMPS,
//     JUMPS,
//   };
// };


//SET SINGLE DROPZONE RECORD
export const setSingleDropzone = (DROPZONE) => {
  return {
    type: SET_SINGLE_DROPZONE,
    DROPZONE,
  };
};


// //ADD SINGLE JUMP RECORD
// export const addJump = (JUMP) => {
//   return {
//     type: ADD_JUMP,
//     JUMP,
//   };
// };


// //UPDATE A SINGLE JUMP RECORD
// export const reformJump = (JUMP) => {
//   console.log('after thunk')
//   return {
//     type: UPDATE_JUMP,
//     JUMP,
//   };
// };


// //DELETE A SINGLE JUMP RECORD
// export const removeJump = (JUMP) => {
//   console.log(JUMP)
//   console.log('afterexpress')
//   return {
//     type: DELETE_JUMP,
//     JUMP,
//     // id,
//   };
// };




// /* THUNKS */ 

// //THUNK: FETCH ALL JUMP RECORDS
// export const Thunk_fetchAllJumpRecords = (id) => {
//     return async (dispatch) => {
//       try {
//         const { data } = await axios.get(`/api/jumprecords/${id}/jumps`);
//         dispatch(setAllJumps(data));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//   };


// THUNK: FETCH SINGLE DROPZONE RECORD
export const Thunk_fetchSingleDropzone = (dropzoneId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/dropzones/${dropzoneId}`);
      dispatch(setSingleDropzone(data));
    } catch (err) {
      console.log(err);
    }
  };
};


// //THUNK: ADD A NEW DROPZONE RECORD
// export const Thunk_createJump = (JUMP, id) => {
//   return async (dispatch) => {
//     try {
//       console.log('thunk', JUMP)
//       const { data } = await axios.post(`/api/jumprecords/${id}/create/`, JUMP);
//       dispatch(addJump(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };


// //THUNK: UPDATE A SINGLE JUMP RECORD
// export const Thunk_updateJump = (JUMP, id, jumpId) => {
//   return async (dispatch) => {
//     console.log('before thunk')
//     const { data } = await axios.put(`/api/jumprecords/${id}/${jumpId}`, JUMP);
//     dispatch(reformJump(data));
//   };
// };


// //THUNK: DELETE A SINGLE JUMP RECORD
// export const Thunk_deleteJump = (id, jumpId) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.delete(`/api/jumprecords/${id}/${jumpId}`);
//       dispatch(removeJump(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };



/* REDUCERS */ 
// [{},{},{},{}]
export default function dropzoneReducer(state = initialState, action) {
  switch (action.type) {
//     case SET_DROPZONES:
//       return action.DROPZONES;
    case SET_SINGLE_DROPZONE:
      return action.DROPZONE;  
//     case ADD_DROPZONE:
//       return action.DROPZONE;
//     case UPDATE_DROPZONE:
//       return action.DROPZONE;
//       // return state.map((record) =>
//       //   record.id === action.DROPZONE.id ? action.record : record
//       // );
//     case DELETE_DROPZONE:
//       return action.DROPZONE;
//       // return state.filter((log) => log.id !== action.id);
    default:
      return state;
  }
}