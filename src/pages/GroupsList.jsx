import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileImg1 from "../assets/Ellipse 2.png";
import ProfileImg2 from "../assets/Ellipse 3.png";
import ProfileImg3 from "../assets/Ellipse 4.png";
import ButtonJoin from "./ButtonJoin";
const GroupsList = () => {
  return (
    <>
      <div className="py-[35px]">
        <div className=" flex items-center">
          <IoIosSearch className=" relative z-[9999] text-[#1053FC]  ml-[23px] text-[25px]" />
          <input
            className=" shadow-lg w-[600px]  absolute  bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border rounded-[20px] pl-[70px]  py-[20px] transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 border-[#14141E] focus:shadow"
            placeholder="Search"
          />
          <BsThreeDotsVertical className="relative ml-[500px] text-[#1053FC] text-[25px]" />
        </div>
      </div>
      <div className="mt-[20px] pt-[13px] pl-[20px] pr-[22px] pb-[21px] transition cursor-pointer hover:shadow-md bg-[#ebeeec] border-[4px] rounded-[20px]">
        <div className="flex justify-between">
          <h2 className="text-black font-popp text-[20px] font-semibold">Groups List</h2>
          <IoIosSearch className=" relative z-[9999] text-[#1053FC]  ml-[23px] text-[25px]" />
        </div>
        <div className="flex justify-between items-center py-[17px]">
          <div className="flex items-center cursor-pointer  rounded-full">
            <img
              src={ProfileImg1}
              alt="Profile"
              className="rounded-full drop-shadow-2xl w-[70px] h-[70px]"
            />
            <div className="ml-[14px]">
                <h3 className="text-[18px] font-popp font-semibold text-black">Friends Reunion</h3>
                <p className="text-[14px] font-popp font-medium text-[#737373]">Hi Guys, Wassup!</p>
            </div>
           
          </div>
          <ButtonJoin>
               Join
         </ButtonJoin>
        </div>
        <div className="w-[540px] h-[1px] bg-[rgb(0,0,0,0.2)]"></div>
        <div className="flex justify-between items-center py-[17px]">
          <div className="flex items-center cursor-pointer  rounded-full">
            <img
              src={ProfileImg2}
              alt="Profile"
              className="rounded-full drop-shadow-2xl w-[70px] h-[70px]"
            />
            <div className="ml-[14px]">
                <h3 className="text-[18px] font-popp font-semibold text-black">Friends Forever</h3>
                <p className="text-[14px] font-popp font-medium text-[#737373]">Good to see you.</p>
            </div>
           
          </div>
          <ButtonJoin>
               Join
         </ButtonJoin>
        </div>
        <div className="w-[540px] h-[1px] bg-[rgb(0,0,0,0.2)]"></div>
        <div className="flex justify-between items-center py-[17px]">
          <div className="flex items-center cursor-pointer  rounded-full">
            <img
              src={ProfileImg3}
              alt="Profile"
              className="rounded-full drop-shadow-2xl w-[70px] h-[70px]"
            />
            <div className="ml-[14px]">
                <h3 className="text-[18px] font-popp font-semibold text-black">Crazy Cousins</h3>
                <p className="text-[14px] font-popp font-medium text-[#737373]">What plans today?</p>
            </div>
           
          </div>
          <ButtonJoin>
               Join
         </ButtonJoin>
        </div>
       </div>
     
    </>
  );
};

export default GroupsList;
