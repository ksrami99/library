import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './Components/SignIn.jsx';
import {createRoutesFromElements, createBrowserRouter, Route} from "react-router-dom"
import SignUp from './Components/SignUp.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={< SignIn/>} />
      <Route path="/regisre" element={< SignUp/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
