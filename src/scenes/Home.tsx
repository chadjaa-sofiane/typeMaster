import React from "react";
import MainMenu from "../components/MainMenu";
import KeyboardPattern from 'src/assets/KeyboardPattern.svg'
function Home() {
    return (
        <div className="flex flex-col justify-center items-center font-jost p-12 w-screen h-screen"style={{ backgroundImage: `url(${KeyboardPattern})`, backgroundRepeat: "repeat"}}>
            <div className="flex flex-col h-full justify-center items-stretch gap-4">
                <h1 className="text-6xl m-auto bg-secondary rounded p-5">Welcome Type Master 💖!</h1>
                <MainMenu />
            </div>
        </div>
    );
}

export default Home;
