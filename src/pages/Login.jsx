
import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/Rectangle 69.jpg";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../userSlice";
const Login = () => {
  const auth = getAuth();

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");

  const [showPassword, setShowPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setpasswordErr("");
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailErr("Please give email");
    } else {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      )
        setEmailErr("Please enter valid email address");
    }
    if (!password) {
      setpasswordErr("Please give password");
    }
    if (email) {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
          
          dispatch(userLoginInfo(user.user));
          localStorage.setItem("userLoginInfo", JSON.stringify(user.user))
          toast.success("Login Suessessfully Done");
          setTimeout(() =>{
            navigate("/home")
          },2000)
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode.includes("auth/invalid-credential") ){
            toast.error("please give your right email & password")
          }

        });
    }
  };

  return (
    <div className="flex">
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      <div className="w-1/2">
        <div className="mt-[150px] ml-[190px]">
          <h2 className="text-[#03014C] font-sans text-[33.344px] font-bold mb-[53px]">
            Login to your account!
          </h2>
          <p className="flex items-center py-[20px] pl-[30px] border radius-[8.336px] w-[220.904px] mb-[32px]">
            <FaGoogle className="text-[#15013b] mr-[9.77px]" />
            Login with Google
          </p>
          <div className="relative">
            <input
              onChange={handleEmail}
              type="email"
              id="identifierId"
              name="identifier"
              placeholder="Youraddres@email.com"
              autoComplete="username"
              spellCheck="false"
              className=" mb-[60px] w-[368px] mt-[32px] border-b-[3px] bg-none  py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <p className=" font-normal text-red-700 font-popp">{emailErr}</p>
            <p className="absolute text-[#323232] top-[17px] left-[10px]">
              Email Addres
            </p>
          </div>
          <div className="relative w-[368px]">
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-[20px] top-[50%] text-xl  cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-[20px] top-[50%]  text-xl  cursor-pointer"
              />
            )}

            <input
              onChange={handlePassword}
              type={`${showPassword ? "text" : "password"}`}
              id="identifierId"
              name="identifier"
              placeholder="Enter your password"
              autoComplete="username"
              spellCheck="false"
              className="w-[368px] mt-[32px] border-b-[3px] bg-none  py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <p className="absolute text-[#323232] top-[17px] left-[10px]">
              Password
            </p>
            <p className=" font-normal text-red-700 font-popp">{passwordErr}</p>
          </div>
          <button
            onClick={handleSubmit}
            className=" cursor-pointer mt-[51px] mb-[35px] w-[368px] bg-[#5F35F5] py-[20px] px-[132px] rounded-[8.707px] text-white text-[12px] font-semibold"
          >
            Login to Continue
          </button>
          <p className="mt-1 p-1 bg-orange-500 text-center w-[368px] text-white rounded">
               <Link to="/forgotpassword">Forgot password</Link>
          </p>
          <p className="text-[#03014C] font-sans text-[13px] font-bold">
            Already have an account ?{" "}
            <span className="text-[#EA6C00] font-bold text-[13px]">
             <Link to="/registration">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className=" w-full h-screen object-cover"
          src={loginImg}
          alt="loading......"
        />
      </div>
    </div>
  );
};

export default Login;
