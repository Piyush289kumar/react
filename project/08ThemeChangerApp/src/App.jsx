import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [ThemeMode, setThemeMode] = useState('light');

  const LightMode = () => {
    setThemeMode('light')
  }

  const DarkMode = ()=>{
    setThemeMode('dark')
  }


  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(ThemeMode);
  },[ThemeMode])

  return (
    <ThemeProvider value={{ ThemeMode, LightMode, DarkMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ ThemeProvider>
  )
}

export default App
