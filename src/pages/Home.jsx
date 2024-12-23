
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "./Sidebar/Sidebar";
import GroupsList from "./GroupsList";


const Home = () => {
  const auth = getAuth();
  const data = useSelector((state) => state.userDetails.userInfo);
   console.log(data);
   const navigate = useNavigate();
   const [verify, setVerify] = useState(false)
   useEffect(() =>{
    if (!data) {
      navigate("/login")    
    }
   });
   onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true)
    } else {
      setVerify(false)
    }
  });
  return (
    <div className="flex p-5">
       {verify ? (
        <>
         <div className="flex">
         <div className="w-[230px]">
          <div>
          <Sidebar/>
          </div>
         </div>
         <div className="w-[427px]">
          <GroupsList/>
         </div>
         <div className="w-[346px]"></div>
         </div>
         
       </>
       ) : (
        <p>please verify your email</p>
       )}
    </div>
  )  
}

export default Home