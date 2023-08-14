// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  //</React.StrictMode>,
)
