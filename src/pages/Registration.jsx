import regimg from "../assets/pexels-armin-rimoldi-5553946 2.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import React from 'react';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";

const Registration = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  // const [sucess, setSuccess] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");

  const [showPassword, setShowPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailErr("");
    return;
  };
  const handlefullName = (event) => {
    setFullName(event.target.value);
    setFullNameErr("");
    return;
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    setpasswordErr("");
    return;
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
    if (!fullName) {
      setFullNameErr("Please give fullName");
    }
    if (!password) {
      setpasswordErr("Please give password");
    }
    // else {
    //   if (!/=.*?[A-Z]/.test(password)){
    //     setpasswordErr("At least one upper case")
    //   }
    //   else if (!/=.*?[a-z]/.test(password)){
    //     setpasswordErr("At least one lower case ")
    //   }
    //   else if (!/=.*?[0-9]/.test(password)){
    //     setpasswordErr("At least one digit ")
    //   }
    //   else if (!/=.*?[#?!@$%^&*-]/.test(password)){
    //     setpasswordErr("At least one special character ")
    //   }
    //   else if (!/8,/.test(password)){
    //     setpasswordErr("Minimum eight in length")
    //   }
    // }
    if (email && password && fullName) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          toast.success("Registration successfully Done");
          setTimeout(() => {
            navigate("/Login");
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailErr("This email is already in uesd");
          }
        });
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2">
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

        <div className="mt-[141px] ml-[190px]">
          <h3 className="font-nuni text-[34px] font-bold text-[#11175D]">
            Get started with easily register
          </h3>
          <p className="font-nuni text-[20px] font- text-[#808080] mt-[13px] mb-[53px]">
            Free register and you can enjoy it
          </p>
          {/* {sucess && (
            <p className="bg-green-500 text-white rounded py-3 w-[368px] mb-[100px]">
              {sucess}
            </p>
          )} */}

          <div className="relative">
            {/* Input Field */}
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              id="identifierId"
              name="identifier"
              placeholder=" "
              autoComplete="username"
              spellCheck="false"
              className="w-[368px] border bg-none border-gray-300 rounded-[8px] py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {/* Floating Label */}
            <label
              htmlFor="identifierId"
              className="absolute bg-white left-[36px] top-[-12px] text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500 px-[18px]"
            >
              Email Address
            </label>
            <p className=" font-normal text-red-700 font-popp">{emailErr}</p>
          </div>
          <div className="py-[47px]">
            <div className="relative">
              {/* Input Field */}
              <input
                onChange={handlefullName}
                type="text"
                id="identifierId"
                name="identifier"
                placeholder=" "
                autoComplete="username"
                spellCheck="false"
                className="w-[368px] border bg-none border-gray-300 rounded-[8px] py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              {/* Floating Label */}
              <label
                htmlFor="identifierId"
                className="absolute bg-white left-[36px] top-[-12px] text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500 px-[18px]"
              >
                Full name
              </label>
              <p className=" font-normal text-red-700 font-popp">
                {fullNameErr}
              </p>
            </div>
          </div>
          <div className="relative w-[368px] ">
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute top-[12%] text-xl right-[20px] cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute top-[12%] text-xl right-[20px] cursor-pointer"
              />
            )}

            {/* Input Field */}
            <input
              onChange={handlePassword}
              value={password}
              type={`${showPassword ? "text" : "password"}`}
              id="identifierId"
              name="identifier"
              placeholder=" "
              autoComplete="username"
              spellCheck="false"
              className="w-[368px] border bg-none border-gray-300 rounded-[8px] py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {/* Floating Label */}
            <label
              htmlFor="identifierId"
              className="absolute bg-white left-[36px] top-[-12px] text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500 px-[18px]"
            >
              Password
            </label>
            <div>
              <p className=" font-normal text-red-700 font-popp">
                {passwordErr}
              </p>
              <button
                onClick={handleSubmit}
                className=" cursor-pointer mt-[51px] mb-[35px] w-[368px] bg-[#5F35F5] py-[19px] px-[132px] rounded-[86.003px] text-white text-[20px] font-semibold"
              >
                Sign up
              </button>
            </div>
            <p className="text-[#03014C] font-sans text-[13px] font-bold ml-[75px]">
              Already have an account ?{" "}
              <span className="text-[#EA6C00] font-bold text-[13px]">
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className=" w-full h-screen object-cover"
          src={regimg}
          alt="loading......"
        />
      </div>
    </div>
  );
};

export default Registration;
