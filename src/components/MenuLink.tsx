import React from "react";
import { Link } from "react-router-dom";

type MenuLinkProps = {
  title: string;
  link: string;
  className?: string;
};

const MenuLink = ({ className, title, link }: MenuLinkProps) => {
  return (
    <Link
      className={`text-2xl bg-secondary p-2 min-w-[9em] text-center rounded hover:scale-110 hover:shadow-surround hover:shadow-accent  hover:text-accent ${className}`}
      to={link}
    >
      {title}
    </Link>
  );
};

export default MenuLink;