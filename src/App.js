import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';

import Navbar from './Components/Navbar';

import { useAmazonData } from './Context/context';
import {auth} from './firebase';

function App() {
  const [{user}, dispatch] = useAmazonData();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      // any clean up operations go in here
      unsubscribe();
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Navbar />
          <Home />
          </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Navbar />
          <Checkout />
        </Route>
        <Route path='*'>
          <Navbar />
          <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
