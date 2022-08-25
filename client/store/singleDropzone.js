// import axios from 'axios'

// // ACTION TYPES
// const SET_DROPZONE = 'SET_DROPZONE'
// const UPDATE_DROPZONE = 'UPDATE_DROPZONE';

// // ACTION CREATORS 
// export const _setDropzone = dropzone => ({
//   type: SET_DROPZONE,
//   dropzone
// });

// const _updateDropzone = dropzone => {
//   return {
//     type: UPDATE_DROPZONE,
//     dropzone
//   }
// }

// // THUNKS
// export const fetchDropzone = (id) => async (dispatch) => {
//   const {data} = await axios.get(`/api/dropzones/${id}`)
//   dispatch(_setDropzone(data));
// }

// export const updateDropzone = (dropzone, id) => {
//   return async (dispatch) => {
//     try {
//       const { data: updated } = await axios.put(`/api/dropzones/${dropzone.id}`, dropzone);
//       dispatch(_updateDropzone(updated, dropzone));
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

// // REDUCER
// const initialState = {}

// export default function singleDropzoneReducer (state = initialState, action) {
//   switch(action.type){
//     case SET_DROPZONE: 
//       return action.dropzone
//     case UPDATE_DROPZONE:
//       return { ...action.dropzone, dropzone: action.dropzone };
//     default:
//       return state
//   }
// }
