
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/LandingPage";
import {useDispatch,useSelector} from 'react-redux'
import { getUser } from "./config/api";
import { loginSuccess } from "./Redux/slices/authslice";


function App() {
  const dispatch = useDispatch();
   const token = localStorage.getItem("token");
  //  console.log(token);
   const { user } = useSelector((state) => state.auth); 
  useEffect(() => {
    const getuser = async () => {
      if (token && !user) {
        const { user, msg } = await getUser(token);
        dispatch(loginSuccess({ user, token }));
      }
    };

    getuser();
  }, [dispatch, user]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
