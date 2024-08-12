import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from '../types';

// Login Action
export const login = (email, password) => async dispatch => {
  try {
    const response = await fetch('http://localhost:8080/api/challenge/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      localStorage.setItem('token', data.token)
    } else {
      dispatch({ type: LOGIN_FAIL, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

// Register Action
export const register = (username, email, password) => async dispatch => {
  try {
    const response = await fetch('http://localhost:8080/api/challenge/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      localStorage.setItem('token', data.token)
      // Optionally log in the user automatically
    } else {
      dispatch({ type: REGISTER_FAIL, payload: data.message });
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.message });
  }
};

// Logout Action
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  // Optionally clear token from localStorage
};
