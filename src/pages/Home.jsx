
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const data = useSelector((state) => state.userDetails.userInfo);
   console.log(data);
   const navigate = useNavigate();
   const [verify, setVerify] =useState(false)
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
         <div>cxxvcxcxc</div>
         <div>cxxvcxcxc</div>
         <div>cxxvcxcxc</div>
         <div>cxxvcxcxc</div>
       </>
       ) : (
        <p>please verify your email</p>
       )}
    </div>
  )  
}

export default Home