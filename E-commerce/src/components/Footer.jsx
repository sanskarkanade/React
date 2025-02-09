import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-black text-white h-50 flex flex-col justify-center items-center gap-7 text-2xl">
          <p>© 2025 All rights reserved. | Terms of Service | Privacy Policy | Made by Sanskar Kanade</p>
          <div className="flex gap-4 items-center">
            <p>Connect me on </p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-600 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
