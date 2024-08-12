// import {
//     GET_POSTS,
//     POST_ERROR,
//     ADD_POST,
//   } from '../types';
  
//   const initialState = {
//     posts: [],
//   };
  
//   const postsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_POSTS:
//             return {
//             ...state,
//             posts: action.payload,
//             };
//         case ADD_POST:
//             return {
//                 ...state,
//                 posts: [...state.posts, payload],
//             };

//         case UPDATE_POST: 
//             return {
//                 ...state,
//                 posts: [...state.posts, payload],
//             };

//         case POST_ERROR:
//             return {
//             ...state,
//             };
//         default:
//             return state;
//     }
//   };
  
//   export default postsReducer;
  