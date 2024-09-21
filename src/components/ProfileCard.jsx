import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileCard = ({ data }) => {
  // console.log(data);
  const { name, description, background, profileImage, id } = data;
   const [image, setImage] = useState(profileImage);
   const dummyImg = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const handleImgErr = ()=>{
    setImage(dummyImg)
    // console.log(error)
  }

  return (
    <div className="bg-gray-100 w-56 h-72 flex flex-col justify-between items-center gap-4   text-center  overflow-hidden rounded-md">
      <div className="w-full h-[100px]  relative ">
        <img src={background} className="w-full h-24  object-cover " alt="" />
        <div className="absolute rounded-full border-2  border-[#c751bd] overflow-hidden right-[4.5rem] bottom-[-1rem] ">
          <img className="w-16 h-16 object-cover " onError={handleImgErr} src={image} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-xs font-light ">{description}</p>
      </div>
      <div className="icons  w-full">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
      <Link to={`/detailpage/${id}`}>
        <button className="rounded-lg text-white text-sm px-6 py-2 font-normal w-fit bg-[#466e83] mb-4 hover:bg-[#173b4e] ">
          view profile
        </button>
      </Link>
    </div>
  );
};

export default ProfileCard;
