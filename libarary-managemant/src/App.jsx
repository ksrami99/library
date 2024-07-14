// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn'
import Common from './common/Common'
import SignUp from './Components/SignUp'
import HomePage from './Components/HomePage'
function App() {
   return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App