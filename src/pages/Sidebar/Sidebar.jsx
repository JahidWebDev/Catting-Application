import ProfileImg from "../../assets/profileImg.png";
import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, showSet] = useState(false);

  const handClick = () => {
    console.log("hello");
    
    showSet(true);
  };

  return (
    <section>
      <aside className="w-[186px] bg-myhomecolor rounded-[20px] pb-[48px] pt-[38px]">
        <div className="group relative w-[100px] h-[100px] mx-auto cursor-pointer border-[7px] border-[#1053fc] rounded-full">
          {/* Profile Image */}
          <img src={ProfileImg} alt="Profile" className="rounded-full drop-shadow-2xl" />

          {/* Hover Overlay */}
          <div className="w-full h-full hover:bg-black group-hover:opacity-[0.8] absolute top-0 left-0 rounded-full flex justify-center items-center transition-all duration-300">
            {/* Upload Icon */}
            <IoCloudUploadOutline
              onClick={handClick}
              className="text-3xl text-miconcolor  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        <div className=" relative py-[22px] px-[50px] h-[89px] bg-miconcolor ml-[25px] mr-[8px] rounded-l-[20px] mt-[78px]">
          <SlHome className="text-myhomecolor  text-[40px] font-bold" />
          <div className="w-[10px] h-[89px] absolute right-[0px] top-[0px] bg-myhomecolor z-10 rounded-l-[20px] shadow-md"></div>
        </div>
        <div className="text-myiconcolor text-[40px] font-bold ml-[72px] pt-[57px] pb-[89px]">
          <BsChatDotsFill />
        </div>
        <div className="text-myiconcolor text-[49px] font-bold ml-[68px] pb-[89px]">
          <IoMdNotificationsOutline />
        </div>
        <div className="text-myiconcolor text-[44px] font-bold ml-[68px] pb-[89px]">
          <IoSettingsOutline />
        </div>
        <div className="text-myiconcolor text-[45px] font-bold ml-[68px] mt-[59px] pb-[0px]">
          <ImExit />
        </div>
      </aside>

      {show && <div className="w-full h-full bg-[#D3DAEA] bg-opacity-60 backdrop-blur-md absolute top-0 left-0 z-[99999] p-[400px]">
        <div className=" flex justify-center items-center">
          <div className=" bg-myhomecolor w-[600px] py-5 px-5 rounded z-[999999]">
            <div className=" font-popp text-3xl font-semibold text-center text-white">
              <h3>Images Upload</h3>
              <div className=" font-sans text-[16px] font-light text-white text-start py-[20px]">
                <input type="file" />
              </div>
            </div>
            <div className="flex">
            <Button>
             Upload
            </Button>
            <Button>
            <Link to="/login">Back to Home</Link>
            </Button>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default Sidebar;
