
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    
     
     <Route path='/registration' element={<Registration/>}/>
     <Route path="/login" element={<Login/>}/>
      
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
