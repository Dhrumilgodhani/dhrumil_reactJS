import React from 'react'
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { RiPinterestFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { BsPerson } from "react-icons/bs";
import logo from "../assets/web_logo.png"



const Navbar = () => {

    return (


        <div >


            <br />
            <div className='flex bg-gradient-to-r from-blue-400 to-red-400  px-15 py-7 justify-around items-center  relative text-gray-700 border-b-4'>
                <div className='absolute left-5'>
                </div>
                <div className='absolute left-13 '>

                    <ul className='flex space-x-10 '>
                        <li>
                            <Link className='text-lg hover:text-green-900' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/shoppage">Shop</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/page">Page</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className='text-lg  ' to="/contact">Contact</Link>
                        </li>

                    </ul>

                </div>

                <div className='flex absolute   p-5  right-[100px] '>
                    <i className='mr-1 mt-1.5'> <BsPerson /></i>
                    <Link className='ml-4' to="/Login"> Login / Register </Link>
                </div>

            </div>


        </div>
    )
}

export default Navbar
// className='text-xl font-semibold hover:border 






