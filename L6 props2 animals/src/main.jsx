import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.css'
import Header from './components/Header'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App/>
  </React.StrictMode>
)
