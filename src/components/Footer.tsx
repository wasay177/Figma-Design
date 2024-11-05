import Image from "next/image"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return(
    <div>
      <div className="flex flex-row w-[1260px] h-[350px] bg-zinc-800">
        <Image src="/Group 12.png" alt="Group 12" width={130} height={130} className="mt-10 mb-52 ml-14"/>
        <ul className="flex flex-col mt-10 ml-40">
          <li className="text-white font-bold">Information</li>    
          <li className="text-white font-semibold mt-8">Main</li>    
          <li className="text-white font-semibold mt-4">Gallery</li>    
          <li className="text-white font-semibold mt-4">Projects</li>    
          <li className="text-white font-semibold mt-4">Certifications</li>    
          <li className="text-white font-semibold mt-4">Contacts</li>    
        </ul>
        <ul className="flex flex-col mt-2 ml-40">
          <li className="text-white font-bold mt-8">Contacts</li>    
          <li className="text-white font-semibold mt-8 flex gap-4"><IoLocationOutline />1234 Sample street <br /> Austin Texas 78704</li>    
          <li className="text-white font-semibold mt-16 flex gap-4"><BsTelephone />512.333.2222</li>    
          <li className="text-white font-semibold mt-8 flex gap-4"><BsEnvelope />Sampleemail@gmail.com</li>       
        </ul>
        <ul className="flex flex-col mt-2 ml-48">
          <li className="text-white font-bold mt-8">Social Media</li>
          <div className="flex gap-10 mt-8">
          <FaFacebookF className="text-white"/>
          <FaTwitter className="text-white"/>
          <FaLinkedin className="text-white"/>
          <FaPinterestP className="text-white"/>
          </div>
        </ul>
      </div>
      <p className="w-[1260px] h-[57px] bg-zinc-800 text-gray-600 text-center text-xs border border-t-gray-600 p-6">© 2021 All Rights Reserved</p>
    </div>
  )    
}