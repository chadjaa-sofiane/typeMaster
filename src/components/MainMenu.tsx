import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
        <div className='flex flex-col grow justify-center'>
            <div className='flex flex-col h-full bg-primary p-4 gap-4 rounded justify-center items-center'>
                <MenuLink title="Practice" link={"/practice"}/>
            </div>
        </div>
    );
}

type MenuLinkProps ={
    title: string,
    link: string,
}

const MenuLink = ({title, link} : MenuLinkProps) => {
    return (
        <Link className='text-2xl bg-slate-600 w-2/3 p-1 text-center rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent' to={link}>{title}</Link>
    );
}

export default MainMenu;