import React from 'react';
import {useState} from 'react';
import {BsChevronDown, BsChevronRight} from 'react-icons/bs';
import MenuLink from 'src/components/MenuLink';

function ExpandableMenuItem({items, title}: ExpandableMenuItemProps) {
    const [opened, setOpened] = useState(false);

    return (
        <div className='flex flex-col bg-secondary rounded'>
            <button
            onClick={()=>{setOpened((opened)=>!opened);}}
            className='flex justify-center items-center text-2xl p-2 min-w-[9em] bg-secondary rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent'
            >
                {<span className='grow'>{title}</span>}
                {opened? <BsChevronDown/> : <BsChevronRight/>}
            </button>
            {   
            items.map((item)=><MenuLink className={opened?'scale-100 ease-in-out duration-300 block transition-all' :'scale-0 ease-in-out duration-300 hidden transition-all'} title={item.title} link={item.link}/>)
            }
        </div>
    );
}

export default ExpandableMenuItem;

type MenuLinkProps ={
    title: string,
    link: string,
}

type ExpandableMenuItemProps ={
    items: MenuLinkProps[],
    title: string,
}
