import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
            <div className='flex flex-col grow w-1/3 bg-primary p-4 gap-4 rounded justify-center items-center'>
                <MenuLink title="Practice" link={"/practice"}/>
                <MenuLink title="Tutorial" link={"/tutorial"}/>
            </div>

    );
}

type MenuLinkProps ={
    title: string,
    link: string,
}

const MenuLink = ({title, link} : MenuLinkProps) => {
    return (
        <Link className='text-2xl bg-secondary max-w-1/3 p-1 text-center rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent' to={link}>{title}</Link>
    );
}

export default MainMenu;