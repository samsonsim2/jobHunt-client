import { useState, useReducer, useContext } from 'react'
import reducer from './reducer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'
// Create context
const AppContext = React.createContext()

// State values
const initialState = {
  //loading states
  isLoading: false,
  // alert states
  showAlert: false,
  alertText: '',
  alertType: '',
}

// Create Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT })
  }
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    setTimeout(() => {
      clearAlert()
    }, 2000)
  }

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  )
}

// Exports

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState }
