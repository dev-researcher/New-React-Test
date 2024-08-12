import {
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
} from '../types';

const initialState = {
  posts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload._id),
        };

    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
