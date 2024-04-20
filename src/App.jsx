import React,{ useState } from 'react'
import Home from './pages/Home';
import './App.css';
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Home />
      <Toaster/>
    </div>
    
  )
}

export default App
