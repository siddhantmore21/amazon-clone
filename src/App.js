
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import Registration from './Rejistration'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only runs one when app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser)
      if(authUser){
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })


      }
    })

  }, [])
  


  return (
    <Router>

      <div className="app">
        

        <Switch>
          <Route path="/login">
            
            <Login />
          </Route>
          <Route path="/register">
            
            <Registration />
          </Route>
          <Route path="/checkout">
            <Header />           
            <Checkout />
          </Route>
        
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      
        
      </div>

    </Router>
    
  );
}

export default App;
