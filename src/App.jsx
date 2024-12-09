
// eslint-disable-next-line no-unused-vars
import firebaseConfig from './Components/Authentication/FireBase.config'

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Registration from './Components/Registration';
import ForgotPassword from './Components/ForgotPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
         
     <Route index element={<Registration/>}/>
     <Route path='/registration' element={<Registration/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      
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
