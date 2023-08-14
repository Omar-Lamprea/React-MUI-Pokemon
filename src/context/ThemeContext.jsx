/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';


export const ThemeContext = createContext("");
const getTheme = () =>{
  let theme = localStorage.getItem('theme')
  if(!theme){
    const systenTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    if(systenTheme){
      localStorage.setItem('theme', 'dark')
      theme = 'dark'
    }else{
      localStorage.setItem('theme', 'light')
      theme = 'light'
    }
  }
  return theme
}

const initialState = getTheme()

const reducer = (state, action) =>{
  switch (action.type){
    case 'switchTheme':
      localStorage.setItem('theme', action.payload)
      return  state, action.payload
    default:
        throw new Error('action type error')
  }
}



const ThemeContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
export const useContextTheme = () => useContext(ThemeContext)

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

