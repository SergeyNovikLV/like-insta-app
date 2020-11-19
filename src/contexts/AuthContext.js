import React, { useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'
import app from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [pending, setPending] = useState(true);
  
  function signup(email, password) {
   return auth.createUserWithEmailAndPassword(email, password)
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
   }

   function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
   }

   function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
  return currentUser.updatePassword(password)
  }

   function logout() {
    return auth.signOut
   }

 
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending) {
    return<>Loading ... </>
  }

   const value = {
    currentUser,
    signin,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
      
  )
}
