// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn'
import Common from './common/Common'
import SignUp from './Components/SignUp'
function App() {
   return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Common/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App