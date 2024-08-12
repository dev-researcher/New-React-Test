// Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../../redux/actions/auth-actions';
import InputField from '../../atoms/input/input';
import Button from '../../atoms/button/button';
import './login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authError = useSelector(state => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(email, password))
        .then(() => navigate('/'))
        .catch(() => setError(authError));
    } else {
      dispatch(register(username, email, password))
        .then(() => navigate('/'))
        .catch(() => setError(authError));
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-page">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <InputField
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={!isLogin}
          />
        )}
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
        <Button type="button" onClick={toggleMode}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </Button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
