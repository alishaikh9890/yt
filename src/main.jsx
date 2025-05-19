import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import store from './app/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ApiProvider store={store}>
    <App />
  </ApiProvider>
  </StrictMode>,
)
