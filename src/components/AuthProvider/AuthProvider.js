import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, token, setToken }) => {
  useEffect(() => {
    const storageToken = window.localStorage.getItem('_Token');
    setToken(storageToken);
  }, [setToken])

  return <>{token ? children : <Redirect to="/signin" />}</>;
};

const PublicRoute = ({ children, token, setToken }) => {
  useEffect(() => {
    const storageToken = window.localStorage.getItem('_Token');
    setToken(storageToken);
  }, [setToken])

  return <>{!token ? children : <Redirect to="/" />}</>;
};

const AuthProvider = { PrivateRoute, PublicRoute };

export default AuthProvider;
