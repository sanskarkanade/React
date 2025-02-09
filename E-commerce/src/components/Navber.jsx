import React from 'react'
import {NavLink , Link} from 'react-router-dom'


const Navber = () => {
    return (
        <div>
            <div className="h-16 bg-blue-500 flex items-center justify-between px-6 fixed w-full">
                <div className="text-xl font-bold text-white flex items-center gap-3 cursor-pointer">
                    <div><img src='./src/assets/logo1.jpg' className='h-5 w-5'></img></div>
                    <p>Eshany Bazzar</p>
                </div>
                <input
                    type="text"
                    placeholder="Search items here"
                    className="bg-white h-8 w-96 px-3 border-none outline-none focus:border-b-2 focus:border-cyan-700"
                />
                <div>
                    <ul className="flex gap-5 text-white">
                        <li className='cursor-pointer'><NavLink to="/">Home</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/about">About Us</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/mobile">Contact Us</NavLink></li>
                        <li className='cursor-pointer'><NavLink to="/help">Help</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navber
