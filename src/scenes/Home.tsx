import React from "react";
import MainMenu from "../components/MainMenu";
import KeyboardPattern from 'src/assets/KeyboardPattern.svg'
function Home() {
    return (
        <div className="font-jost p-12 w-screen h-screen"style={{ backgroundImage: `url(${KeyboardPattern})`, backgroundRepeat: "repeat"}}>
            <div className="flex flex-col justify-center items-center">
                <h1 className="m-auto">Welcome Type Master 💖!</h1>
                <MainMenu />
            </div>
        </div>
    );
}

export default Home;
