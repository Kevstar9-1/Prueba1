import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const handleLinkClick = () => {
    setHideHeader(true);
  };

  return (
    <header className={`flex ${hideHeader ? 'hidden' : ''}`}>
      <nav className="flex item-right">
        <ul className="flex">
          <li className="mx-2">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link href="/#myself">Personal Information</Link>
          </li>
          <li className="mx-2">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="mx-2">
            <Link href="/#callAction">Call Action</Link>
          </li>
          <li className="mx-2">
            <Link href="/#fooster">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src="/ima/logop.jpg" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
