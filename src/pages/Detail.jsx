import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { cardData } from "../Utils/constant/cardData";
import { useState } from "react";

const Detail = () => {
  const { id } = useParams();
  // console.log(id)
  // console.log(cardData)
  const profile = cardData.find((card) => card.id === parseInt(id));
  // console.log(profile)
  const { name, profession, description, profileImage } = profile;
  const [image, setImage] = useState(profileImage);

  const dummyImg =
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleImg = () => {
    setImage(dummyImg);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FBF4FA] bg-[url('/assets/images/background.png')] bg-cover bg-center">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="left w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Profile"
            onError={handleImg}
          />
        </div>
        <div className="right w-full md:w-1/2 px-8 py-8 md:px-10 md:py-20 flex flex-col gap-6 justify-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-4xl">{name}</h1>
            <h3 className="opacity-65 text-sm md:text-base">{profession}</h3>
          </div>
          <p className="text-center md:text-left">{description}</p>
          <div className="icons flex justify-center md:justify-start space-x-4">
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
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#bb80b6] hover:bg-[#c751bd] w-fit rounded-lg text-white px-4 py-2">
              Buy me a coffee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
