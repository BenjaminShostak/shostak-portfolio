import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-red-600">
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Ben-Jam-In
                    </NavLink>
                    <NavLink to="/post">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="about">
                        About ME!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}