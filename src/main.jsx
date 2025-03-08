import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import { ThemeProvider } from "./styles/Theme/Theme.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
