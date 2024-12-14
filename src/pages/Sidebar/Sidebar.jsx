import ProfileImg from "../../assets/profileImg.png"
import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <section>
      <aside className="w-[186px] bg-myhomecolor rounded-[20px] pb-[48px]">
         <div className="pt-[38px] pl-[43px] pr-[43px]">
           <img src={ProfileImg} alt="loading......." />
         </div>
         <div className=" relative py-[22px] px-[50px] h-[89px] bg-white ml-[25px] mr-[8px] rounded-l-[20px] mt-[78px]">
          <SlHome className="text-myhomecolor  text-[40px] font-bold"/> 
          <div className="w-[10px] h-[89px] absolute right-[0px] top-[0px] bg-myhomecolor z-10 rounded-l-[20px] shadow-md"></div>
         </div>
         <div className="">
         <BsChatDotsFill/>
         </div>     
      </aside>
    </section>
  )
}

export default Sidebar