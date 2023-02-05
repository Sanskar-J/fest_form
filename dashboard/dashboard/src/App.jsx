import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';
import Dash from './dash/dash';
import AsyncAwait from './dash/AsyncAwait';
function App() {
  

  return (
    <div>
      <h1>Dashboard</h1>
      <>
      <div className="stuff">
      {/* <Dash /> */}
      <AsyncAwait />
      </div>
      

      
    </>
    </div>
  )
}

export default App
