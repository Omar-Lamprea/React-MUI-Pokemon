
import { Switch } from '@mui/material';
import { useContextTheme } from '../../context/ThemeContext'
import { useState } from 'react';

const BtnSwitchTheme = () => {
  const {state, dispatch} = useContextTheme()
  const [checked] = useState(state === 'dark' ? true : false)
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const switchColorTheme = () =>{
    state === 'dark' 
      ? dispatch({type: 'switchTheme', payload: 'light'})
      : dispatch({type: 'switchTheme', payload: 'dark'})
  }

  return (
    <Switch 
      {...label} 
      onChange={switchColorTheme}
      defaultChecked={checked}
    />
  )
}

export default BtnSwitchTheme