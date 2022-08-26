import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStateProvider } from './hook/useGlobalState'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
