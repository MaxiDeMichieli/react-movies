import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const SignIn = ({ setToken }) => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <h1 className="text-center my-4">Bienvenidos a Movies Com5</h1>
      <div className="text-center">
        {login ? (
          <p>
            ¿No estás registrado? ¿Qué esperás?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setLogin(false)}
            >
              Registrate!
            </Link>
          </p>
        ) : (
          <p>
            ¿Ya estás registrado?{' '}
            <Link to="#" className="text-center" onClick={() => setLogin(true)}>
              Iniciá sesión!
            </Link>
          </p>
        )}
      </div>
      {login ? <Login /> : <Register setToken={setToken} />}
    </>
  );
};

export default SignIn;
