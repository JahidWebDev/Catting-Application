import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleSubmit = () =>{
    if (!email) {
      setEmailErr("Enter your Email Address")      
    }else {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ){
        setEmailErr("Please enter valid email address");
      }
       
    }
    if(email){
      sendPasswordResetEmail(auth, email)
  .then(() => {
    toast("Please check your email");
  })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode.includes("auth/email-already-in-use")) {
      setEmailErr("This email is already in uesd");
    }
  });
}
  }




  return (
    <div className=" bg-purple-950 w-full h-screen">
    <ToastContainer/>
      <div className=" flex justify-center items-center h-screen">
        <div className="bg-white w-[600px] py-5 rounded">
          <h3 className="font-popp text-xl font-semibold text-center">
            ForgotPassword
          </h3>
          <div className="ml-5">
            <div>
              <p className="font-nuni pb-[10px] text-[13.34px] text-[#8180A5]">
                Email Address
              </p>
              <input
                onChange={handleEmail}
                value={email}
                placeholder="Youraddres@gmail.com"
                type="email"
                className="w-[372px] py-16px bg-transparent text-[#03014C] font-sans font-smaibold text-[20px] border-b-2 border-[#CDCCDB] fouce:border-[#03014C] focus:outline-none placeholder:text-[#03014C] "
              />
              <p className=" font-normal text-red-700 font-popp">{emailErr}</p>
            </div>
            <div className="flex gap-x-5">
              <button
                onClick={handleSubmit}
                className="bg-[#5F35F5] text-white text-base font-popp font-samibold rounded py-2 px-3 justify-center mt-[30px]"
              >
                Reset
              </button>
              <button className="bg-[#5F35F5] text-white text-base font-popp font-samibold rounded py-2 px-3 justify-center mt-[30px]">
              <Link to="/login">Back To Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
