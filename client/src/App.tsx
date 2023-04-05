import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider,createTheme } from '@mui/material'
import { Index } from './pages'
import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Index/>
      </div>
    </ThemeProvider>
  )
}

export default App
