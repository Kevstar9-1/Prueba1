import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex">
      <div className = "logo">
        <img src="/ima/logop.jpg" alt="logo" />
      </div>
      <nav className="flex item-center">
        <ul className="flex">
          <li className="mx-2">
            <a href="/">Home</a>
          </li>
          <li className="mx-2">
            <Link href="/#1">Personal Information </Link>
          </li>
          <li className="mx-2">
            <a href="/myself">Projects</a>
          </li>
          <li className="mx-2">
            <a href="/projects">Call Action</a>
          </li>
          <li className="mx-2">
            <a href="/contact">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

