import React from "react";
import image from "../HD-Summer-Desktop-Wallpaper.jpg";

export default function Home() {
    return(
        <main>
            <img src={image} alt="Wild Fire" className="absolute object-cover w-full h-full"/>
                <section className="absolute flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="text-5xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name" >Hi There! I'm Ben!
                    </h1>
                </section>
        </main>
    )
};