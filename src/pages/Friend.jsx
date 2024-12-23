import { IoIosSearch } from "react-icons/io";
import ProfileImg5 from "../assets/Ellipses.png";
import ProfileImg6 from "../assets/Ellipses5.png";
import ProfileImg7 from "../assets/Ellipsess7.png";
import ButtonJoin from "./ButtonJoin";

const Friend = () => {
  return (
    <>
    <div className="py-[10px]">
     </div>
    <div className="pt-[13px] pl-[20px] pr-[22px] pb-[21px] transition cursor-pointer hover:shadow-md bg-[#ebeeec] border-[4px] rounded-[20px]">
      <div className="flex justify-between">
        <h2 className="text-black font-popp text-[20px] font-semibold">Friend Request</h2>
        <IoIosSearch className=" relative z-[9999] text-[#1053FC]  ml-[23px] text-[25px]" />
      </div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex items-center cursor-pointer  rounded-full">
          <img
            src={ProfileImg5}
            alt="Profile"
            className="rounded-full drop-shadow-2xl w-[70px] h-[70px]"
          />
          <div className="ml-[14px]">
              <h3 className="text-[18px] font-popp font-semibold text-black">Swathi</h3>
              <p className="text-[14px] font-popp font-medium text-[#737373]">Dinner?</p>
          </div>
         
        </div>
        <ButtonJoin>
        Accept
       </ButtonJoin>
      </div>
      <div className="w-[540px] h-[1px] bg-[rgb(0,0,0,0.2)]"></div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex items-center cursor-pointer  rounded-full">
          <img
            src={ProfileImg6}
            alt="Profile"
            className="rounded-full drop-shadow-2xl w-[70px] h-[70px]"
          />
          <div className="ml-[14px]">
              <h3 className="text-[18px] font-popp font-semibold text-black">Kiran</h3>
              <p className="text-[14px] font-popp font-medium text-[#737373]">Hi.....</p>
          </div>
         
        </div>
        <ButtonJoin>
        Accept
       </ButtonJoin>
      </div>
      <div className="w-[540px] h-[1px] bg-[rgb(0,0,0,0.2)]"></div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex items-center cursor-pointer  rounded-full">
          <img
            src={ProfileImg7}
            alt="Profile"
            className="rounded-full drop-shadow-2xl w-[70px] h-[70px]"
          />
          <div className="ml-[14px]">
              <h3 className="text-[18px] font-popp font-semibold text-black">CTejeshwini C</h3>
              <p className="text-[14px] font-popp font-medium text-[#737373]">I will call him today.</p>
          </div>
         
        </div>
        <ButtonJoin>
        Accept
       </ButtonJoin>
      </div>
     </div>
   
  </>
  )
}

export default Friend