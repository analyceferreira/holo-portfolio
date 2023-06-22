import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/App/App.jsx'
import './styles/index.css'
import { ThemeProvider } from "./styles/Theme/Theme.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
