import { IoIosSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileImg from "../assets/profileImg.png";
import ButtonJoin from "./ButtonJoin";
const GroupsList = () => {
  return (
    <>
      <div className="py-[35px]">
        <div className=" flex items-center">
          <IoIosSearch className=" relative z-[9999] text-[#1053FC]  ml-[23px] text-[25px]" />
          <input
            className=" shadow-lg w-[427px]  absolute  bg-transparent bg-[#14141E] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-[20px] pl-[70px]  py-[20px] transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
            placeholder="Search"
          />
          <BsThreeDotsVertical className="relative ml-[330px] text-[#1053FC] text-[25px]" />
        </div>
      </div>
      <div className="pt-[13px] pl-[20px] pr-[22px] pb-[21px] bg-white border-[4px] rounded-[20px]">
        <div className="flex justify-between">
          <h2 className="text-black font-popp text-[20px] font-semibold">Groups List</h2>
          <IoIosSearch className=" relative z-[9999] text-[#1053FC]  ml-[23px] text-[25px]" />
        </div>
        <div className="flex justify-between items-center py-[17px]">
          <div className="flex items-center cursor-pointer  rounded-full">
            <img
              src={ProfileImg}
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
      </div>
    </>
  );
};

export default GroupsList;
