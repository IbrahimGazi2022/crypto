import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { VscReferences } from "react-icons/vsc";

const SideMenu = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 right-0 z-10 h-full w-80 bg-[#151A27] text-white p-4 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={onClose} className="mb-4">
                <IoCloseSharp size={30} />
            </button>
            <ul>
                <li className='border-b border-[#34364E] pt-5 pb-2'>
                    <a href="" className='flex items-center gap-3'><FaHome color='#088DCD' />
                        Home</a>
                </li>
                <li className='border-b border-[#34364E] pt-5 pb-2'>
                    <a href="" className='flex items-center gap-3'><MdOutlineBrowserUpdated color='#088DCD' />
                        Update</a>
                </li>
                <li className='border-b border-[#34364E] pt-5 pb-2'>
                    <a href="" className='flex items-center gap-3'><FaRegNewspaper color='#088DCD' />
                        News & Event</a>
                </li>
                <li className='border-b border-[#34364E] pt-5 pb-2'>
                    <a href="" className='flex items-center gap-3'><BiSupport color='#088DCD' />
                        Support</a>
                </li>
                <li className='border-b border-[#34364E] pt-5 pb-2'>
                    <a href="" className='flex items-center gap-3'><VscReferences color='#088DCD' />
                        Reffer</a>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;