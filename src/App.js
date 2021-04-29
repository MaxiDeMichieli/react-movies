import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Create from './pages/Create';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import AuthProvider from './components/AuthProvider';
import './App.css';

const { PrivateRoute, PublicRoute } = AuthProvider;

function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <div className="container main-container">
        <Switch>
          <Route path="/" exact>
            <PrivateRoute token={token} setToken={setToken}>
              <Home />
            </PrivateRoute>
          </Route>
          <Route path="/signin" exact>
            <PublicRoute token={token} setToken={setToken}>
              <Signin setToken={setToken} />
            </PublicRoute>
          </Route>
          <Route path="/create" exact>
            <PrivateRoute token={token} setToken={setToken}>
              <Create />
            </PrivateRoute>
          </Route>
          <Route path="/edit/:id" exact>
            <PrivateRoute token={token} setToken={setToken}>
              <Edit />
            </PrivateRoute>
          </Route>
          <Route path="/*" exact>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
