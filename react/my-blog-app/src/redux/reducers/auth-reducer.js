// import {
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     LOGOUT,
//     REGISTER_SUCCESS,
//     REGISTER_FAIL,
//   } from '../types/authTypes';
  
//   const initialState = {
//     isAuthenticated: !!localStorage.getItem('token'),
//     token: localStorage.getItem('token'),
//     user: null,
//     error: null,
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           isAuthenticated: true,
//           token: action.payload.token,
//           user: action.payload.user,
//           error: null,
//         };
//       case LOGIN_FAIL:
//       case REGISTER_FAIL:
//         return {
//           ...state,
//           isAuthenticated: false,
//           token: null,
//           user: null,
//           error: action.payload,
//         };
//       case LOGOUT:
//         return {
//           ...state,
//           isAuthenticated: false,
//           token: null,
//           user: null,
//           error: null,
//         };
//       case REGISTER_SUCCESS:
//         return {
//           ...state,
//           isAuthenticated: true,
//           token: action.payload.token,
//           user: action.payload.user,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default authReducer;
  