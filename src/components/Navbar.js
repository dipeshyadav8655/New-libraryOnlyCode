import React,{useState} from "react";
import Popup from "./Popup";
import {FaPowerOff} from 'react-icons/fa'

const Navbar = () => {
  const [viewPopup, setviewPopup] = useState(false)
  const togglePopup=()=>{
    setviewPopup(!viewPopup);
  }
  return (
    <nav className="flex justify-between items-center px-5 w-full h-[80px] shadow-md">
      <h1 className="font-bold text-2xl text-[#6499E9]">My-Librabry</h1>
      <div>
        <ul className="flex justify-between">
          <li className="px-10 text-[#6499E9] font-semibold">Home</li>
          <li className="px-10 text-[#6499E9] font-semibold">Search</li>
          <li className="px-10 text-[#6499E9] font-semibold" onClick={()=>setviewPopup(!viewPopup)}>Add Books</li>
          <li><FaPowerOff className="text-[#6499E9] font-bold" /> </li>
        </ul>
      </div>
      <Popup viewPopup={viewPopup} togglePopup={togglePopup}/>
    </nav>
  );
};

export default Navbar;
