import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import dataHandler from './handlers/dataHandler'
import './index.css'

const word = dataHandler[Math.floor(Math.random() * dataHandler.length)];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
      word = {word}
    />
  </React.StrictMode>,
)
