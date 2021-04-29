import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Header.css';

const Header = ({ token, setToken }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const closeNav = () => setShow(false);

  const logout = () => {
    closeNav();
    window.localStorage.removeItem('_Token');
    setToken(null);
  }

  return (
    <>
      <header className="header">
        <section className="container">
          <div className="logos">
            <Link to="/" onClick={closeNav}>
              <img id="logo1" src="/logo192.png" alt="logo" />
            </Link>
          </div>
          <button className="btn-menu" onClick={handleShow}>
            <span>
              <i className={show ? 'fas fa-times' : 'far fa-bars'} />
            </span>
          </button>
          <nav
            className={`menu d-flex align-items-center w-100 p-3 ${
              show ? 'is-active' : ''
            }`}
          >
            <>
              <Link to="/" onClick={closeNav}>
                Inicio
              </Link>
              <Link to="/create" onClick={closeNav}>
                Crear
              </Link>
            </>
            <div className="flex-grow-1 d-flex justify-content-end">
              {token ? (
                <Button
                  to="/signin"
                  text="Cerrar Sesión"
                  className="btn btn-outline-light justify-self-end my-3 my-lg-0"
                  onClick={logout}
                />
              ) : (
                <Button
                  to="/signin"
                  text="Iniciar Sesión"
                  className="btn btn-outline-light justify-self-end my-3 my-lg-0"
                  onClick={closeNav}
                />
              )}
            </div>
          </nav>
        </section>
      </header>
      {show ? (
        <div
          className="active-nav-background"
          aria-hidden="true"
          onClick={handleShow}
        />
      ) : null}
    </>
  );
};

export default Header;
