
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "./Sidebar/Sidebar";
import GroupsList from "./GroupsList";
import Friend from "./Friend";
import Friends from "./Friends";
import MyGroup from "./MyGroup";
import UserList from "./UserList";
import Blocked from "./Blocked";


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
         <div className="w-[600px]">
          <GroupsList/>
          <Friend/>
         </div>
         <div className="w-[500px]">
          <Friends/>
          <MyGroup/>
         </div>
         <div className="w-[346px]">
          <UserList/>
          <Blocked/>
         </div>
         </div>
         
       </>
       ) : (
        <p>please verify your email</p>
       )}
    </div>
  )  
}

export default Home