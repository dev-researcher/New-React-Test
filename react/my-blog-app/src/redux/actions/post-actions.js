import {
    GET_POSTS,
    POST_ERROR,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
} from '../types';
  
const getToken = () => `Bearer ${localStorage.getItem('token')}`;
  
export const getPosts = () => async dispatch => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        };

        const res = await fetch('http://localhost:8080/api/challenge/posts', {
            method: 'GET',
            headers: headers,
        });

        if (res.ok) {
            const data = await res.json();
            dispatch({
                type: GET_POSTS,
                payload: data,
            });
        } else {
        const errorData = await res.json();
            dispatch({
                type: POST_ERROR,
                payload: errorData.message || 'Error fetching posts',
            });
        }

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.message,
        });
    }
};
  
export const getPostById = id => async dispatch => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        };

        const res = await fetch(`http://localhost:8080/api/challenge/posts/${id}`, {
            method: 'GET',
            headers: headers,
        });

        if (res.ok) {
            const data = await res.json();
            dispatch({
                type: GET_POSTS,
                payload: [data],
            });
        } else {
        const errorData = await res.json();
            dispatch({
                type: POST_ERROR,
                payload: errorData.message || 'Error fetching posts',
            });
        }

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.message,
        });
    }
};
  
export const addPost = (body) => async dispatch => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': getToken(),
      };
  
      const res = await fetch('http://localhost:8080/api/challenge/posts', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: ADD_POST,
          payload: data,
        });
      } else {
        const errorData = await res.json();
        dispatch({
          type: POST_ERROR,
          payload: errorData.message || 'Error posting data',
        });
      }
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.message,
      });
    }
};

export const updatePost = (body, id) => async dispatch => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': getToken(),
      };
  
      const res = await fetch(`http://localhost:8080/api/challenge/posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: UPDATE_POST,
          payload: data,
        });
      } else {
        const errorData = await res.json();
        dispatch({
          type: POST_ERROR,
          payload: errorData.message || 'Error posting data',
        });
      }
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.message,
      });
    }
};
  
export const deletePost = (id) => async dispatch => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': getToken(),
      };
  
      const res = await fetch(`http://localhost:8080/api/challenge/posts/${id}`, {
        method: 'DELETE',
        headers,
      });
  
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: DELETE_POST,
          payload: { _id: id },
        });
      } else {
        const errorData = await res.json();
        dispatch({
          type: POST_ERROR,
          payload: errorData.message || 'Error posting data',
        });
      }
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.message,
      });
    }
};