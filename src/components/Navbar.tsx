import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="w-[calc(100vw - .5rem)] bg-primary h-12 flex justify-between p-2">
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                <BsChevronLeft className="w-8 h-8 bg-secondary text-black rounded-2xl hover:text-accent hover:scale-110 hover:shadow-surround hover:shadow-accent transition-all relative left-0" />
            </button>
            <div className="flex grow justify-center gap-4">
                <StyledLink link="/mainmenu" title="Main Menu" />

                <StyledLink link="/about" title="About" />
            </div>
        </div>
    );
}

type StyledLinkProps = {
    title: string;
    link: string;
};

const StyledLink = ({ title, link }: StyledLinkProps) => {
    return (
        <Link
            className="text-lg flex flex-col justify-center p-2 min-w-[5em] bg-secondary text-center rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent"
            to={link}
        >
            <span>{title}</span>
        </Link>
    );
};

export default Navbar;
