
// eslint-disable-next-line no-unused-vars
import firebaseConfig from './Components/Authentication/FireBase.config'

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
         
     <Route index element={<Registration/>}/>
     <Route path='/registration' element={<Registration/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/forgotpassword" element={<ForgotPassword/>}/>
     <Route path="/home" element={<Home/>}/>
     
    
      
    </Route>
    
  )
);

function App() {


  return (
    <>
      <RouterProvider router={router} />         
    </>
  )
}

export default App
