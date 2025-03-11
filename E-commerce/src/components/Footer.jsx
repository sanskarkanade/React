import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-black text-white p-10 sm:h-50 flex flex-col justify-center items-center gap-7 text-2xl">
          <p>© 2025 All rights reserved. | Terms of Service | Privacy Policy | Made by Sanskar Kanade</p>
          <div className="flex gap-4 items-center">
            <p>Connect me on </p>
            <a href="https://www.linkedin.com/in/sanskar-kanade-585805322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-600 transition" />
            </a>
            <a href="https://github.com/sanskarkanade" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-500 transition" />
            </a>
            <a href="https://www.instagram.com/sanskar_1776?igsh=MWV5azV2Y3Zuc2tmeQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500 transition" />
            </a>
            <a href="https://x.com/Sanskarkanade17?t=i5NsBVQpYgrWcmG0nO9SlQ&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
