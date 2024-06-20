import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Greeting from './App.jsx'
import GetInfo from './components/getInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <GetInfo/>
  </React.StrictMode>,
)
