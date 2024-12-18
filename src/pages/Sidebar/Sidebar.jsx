import ProfileImg from "../../assets/profileImg.png"
import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
const Sidebar = () => {
  return (
    <section>
      <aside className="w-[186px] bg-myhomecolor rounded-[20px] pb-[48px]">
         <div className="pt-[38px] pl-[43px] pr-[43px]">
           <img src={ProfileImg} alt="loading......." />
           <div className="w-[100px] h-[100px] hover:bg-black group-hover:opacity-[0.8] absolute top-0 left-0 rounded-full">

           </div>
         </div>
         <div className=" relative py-[22px] px-[50px] h-[89px] bg-white ml-[25px] mr-[8px] rounded-l-[20px] mt-[78px]">
          <SlHome className="text-myhomecolor  text-[40px] font-bold"/> 
          <div className="w-[10px] h-[89px] absolute right-[0px] top-[0px] bg-myhomecolor z-10 rounded-l-[20px] shadow-md"></div>
         </div>
         <div className="text-myiconcolor text-[40px] font-bold ml-[72px] pt-[57px] pb-[89px]">
         <BsChatDotsFill/>
         </div>     
         <div className="text-myiconcolor text-[48px] font-bold ml-[68px] pb-[89px]">
         <IoMdNotificationsOutline />
         </div>     
         <div className="text-myiconcolor text-[45px] font-bold ml-[68px] pb-[89px]">
         <IoSettingsOutline />
         </div>     
         <div className="text-myiconcolor text-[45px] font-bold ml-[68px] mt-[59px] pb-[0px]">
         <ImExit/>
         </div>     
      </aside>
    </section>
  )
}

export default Sidebar