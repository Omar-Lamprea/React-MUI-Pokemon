import './App.scss'
import Layout from './components/Layout';
import { ThemeProvider} from '@mui/material/styles';
import { MUI_theme } from './context/Palette_MUI';

function App() {
  return (
      <ThemeProvider theme={MUI_theme}>
        <Layout />
      </ThemeProvider>
  )
}

export default App
