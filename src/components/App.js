import React from 'react'
import Signup from './Signup/Signup'
import Signin from './Signin/Signin'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import UpdateProfile from './UpdateProfile/UpdateProfile'


function App() {
  return (
  <AuthProvider>
   
       <Router>
         <AuthProvider>
           <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
              <Route path='/forgot-password' component={ForgotPassword} />
           </Switch>
         </AuthProvider>
       </Router>
    
    
    
    </AuthProvider> 
  );
}

export default App;
