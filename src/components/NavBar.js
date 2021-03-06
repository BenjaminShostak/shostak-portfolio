import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
// import SocialIcon from "react-social-icons/dist/social-icon";

export default function Navbar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Ben-Jam-In
                    </NavLink>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" 
                    className=" inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                    className=" inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        About ME!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                    url="http://linkedin.com/in/BenjaminShostak" 
                    className="mr-4"
                     target="_blank" 
                     fgColor="#fff" 
                    style={{ height:40 , width:45}}/>
                    <SocialIcon 
                    url="https://www.youtube.com/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:40 , width:45}}/>
                    <SocialIcon 
                    url="https://www.reddit.com/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:40 , width:45}}/>


                </div>
            </div>
        </header>
    )
}