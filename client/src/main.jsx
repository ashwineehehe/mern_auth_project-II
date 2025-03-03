import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="436612768389-vn6l6pl2tktorusnut3bdhtvt66mgiio.apps.googleusercontent.com">

  <BrowserRouter>
 <AppContextProvider>
    <App />
 </AppContextProvider>
  </BrowserRouter>,
  </GoogleOAuthProvider>
)
