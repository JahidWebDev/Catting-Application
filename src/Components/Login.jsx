import { FaGoogle } from "react-icons/fa";
import loginImg from "../assets/Rectangle 69.jpg";
const Login = () => {
  return (
    <div className="flex pb-[212px]">
        <div className="w-1/2">
         <div className="mt-[225px] ml-[190px]">
            <h2 className="text-[#03014C] font-sans text-[33.344px] font-bold mb-[53px]">Login to your account!</h2>
            <p className="flex items-center py-[20px] pl-[30px] border radius-[8.336px] w-[220.904px] mb-[32px]"><FaGoogle className="text-[#15013b] mr-[9.77px]" />Login with Google</p>
            <div className="relative ">
            <input
              type="text"
              id="identifierId"
              name="identifier"
              placeholder="Youraddres@email.com"
              autoComplete="username"
              spellCheck="false"
              className=" mb-[60px] w-[368px] mt-[32px] border-b-[3px] bg-none  py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            
              
            />
            <p className="absolute text-[#323232] top-[17px] left-[10px]">Email Addres</p>
            </div>
            <div className="relative ">
            <input
              type="Password"
              id="identifierId"
              name="identifier"
              placeholder="Enter your password"
              autoComplete="username"
              spellCheck="false"
              className="w-[368px] mt-[32px] border-b-[3px] bg-none  py-[26px] pl-[52px]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            
              
            />
            <p className="absolute text-[#323232] top-[17px] left-[10px]">Password</p>
           
            </div>
            <button  className=" cursor-pointer mt-[51px] mb-[35px] w-[368px] bg-[#5F35F5] py-[20px] px-[132px] rounded-[8.707px] text-white text-[12px] font-semibold">Login to Continue</button>
            <p className="text-[#03014C] font-sans text-[13px] font-bold">Already  have an account ? <span className="text-[#EA6C00] font-bold text-[13px]">Sign In</span></p>
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
  )
}

export default Login