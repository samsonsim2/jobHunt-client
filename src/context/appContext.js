import { useState, useReducer, useContext } from 'react'
import reducer from './reducer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './actions'
import axios from 'axios'

// Create context
const AppContext = React.createContext()

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

// State values
const initialState = {
  //loading states
  isLoading: false,
  // alert states
  showAlert: false,
  alertText: '',
  alertType: '',
  //Register/login states
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
  //Sidebar
  showSidebar: false,
}

// Create Provider
const AppProvider = ({ children }) => {
  const authFetch = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )
  const [state, dispatch] = useReducer(reducer, initialState)
  //Axios

  // ALERT FUNCTIONALITY
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  //TOGGLE SIDEBAR
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  //REGISTER FUNCTIONALITY
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/auth/register',
        currentUser
      )
      console.log(response.data)
      const { user, token, location } = response.data

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
        },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      })
    }
    clearAlert()
  }
  //LOGIN FUNCTIONALITY

  const loginUser = async (currentUser) => {
    console.log(currentUser)
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)

      const { user, token, location } = data

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
        },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      console.log(error.response.data.msg)
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      })
    }
    clearAlert()
  }
  //LOGOUT USER
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    console.log('logout user')
    removeUserToLocalStorage()
  }

  //Add to local storage
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }

  const removeUserToLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }
  // UPDATE USER
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN })
    console.log(currentUser)
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)
      const { user, location, token } = data
      console.log(data)
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      })
      addUserToLocalStorage({ user, location, token })
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
    }
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        addUserToLocalStorage,
        toggleSidebar,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Exports

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState }
