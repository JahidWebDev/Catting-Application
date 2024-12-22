import ProfileImg from "../../assets/profileImg.png";
import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline, IoCloudUploadOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { createRef, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [setProfileImgUpdate] = useState();
  const [image, setImage] = useState(null);
  // const [ setcencel] = useState(false);
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  // Handle showing the image upload modal
  const handleUploadClick = () => setShow(true);

  // Handle file input change
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle cropping action
  const handleCrop = () => {
    if (cropperRef.current?.cropper) {
      setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  // Close the upload modal and reset state
  const closeUploadModal = () => {
    setProfileImgUpdate(false);
      console.log("HELLO");
       
        
  };

  return (
    <section>
      <aside className="w-[186px] bg-myhomecolor rounded-[20px] pb-[48px] pt-[38px]">
        {/* Profile Picture with Upload Option */}
        <div className="group relative w-[100px] h-[100px] mx-auto cursor-pointer border-[7px] border-[#1053fc] rounded-full">
          <img
            src={cropData || ProfileImg}
            alt="Profile"
            className="rounded-full drop-shadow-2xl"
          />
          <div className="w-full h-full hover:bg-black group-hover:opacity-[0.8] absolute top-0 left-0 rounded-full flex justify-center items-center transition-all duration-300">
            <IoCloudUploadOutline
              onClick={handleUploadClick}
              className="text-3xl text-miconcolor opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="relative py-[22px] px-[50px] h-[89px] bg-miconcolor ml-[25px] mr-[8px] rounded-l-[20px] mt-[78px]">
          <SlHome className="text-myhomecolor text-[40px] font-bold" />
          <div className="w-[10px] h-[89px] absolute right-0 top-0 bg-myhomecolor z-10 rounded-l-[20px] shadow-md"></div>
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

      {/* Image Upload Modal */}
      {show && (
        <div className="w-full h-full inset-0 bg-black bg-opacity-60 backdrop-blur-md absolute top-0 left-0 z-[99999] flex justify-center items-center">
          <div className="bg-myhomecolor w-[600px] py-5 px-5 rounded z-[999999]">
            <h3 className="text-3xl font-semibold text-center text-white">
              Image Upload
            </h3>

            <div className="my-4 mx-auto rounded-full overflow-hidden w-[100px] h-[100px]">
              {cropData ? (
                <img
                  src={cropData}
                  alt="Cropped"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="img-preview w-[100px] h-[100px] bg-gray-300" />
              )}
            </div>

            {image && (
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: "100%" }}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
              />
            )}

            <input
              type="file"
              onChange={handleFileChange}
              className="mt-4 text-white"
            />

            <div className="flex justify-between mt-6">
              <Button onClick={handleCrop} className="bg-blue-500">
                Crop
              </Button>
              <Button onClick={closeUploadModal} className="bg-red-500">
                Cancel
              </Button>
              <Button>
                <Link to="/login">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sidebar;