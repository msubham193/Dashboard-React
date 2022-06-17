/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';

import avatar from '../data/avatar.jpg';

import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <button
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        onClick={handleActiveMenu}
      >
        <AiOutlineMenu />
      </button>
      <div className="flex">
        <button className="relative text-xl rounded-full p-3 hover:bg-light-gray">
          <FiShoppingCart />
        </button>
        <button className="relative text-xl rounded-full p-3 hover:bg-light-gray">
          <BsChatLeft />
        </button>
        <button className="relative text-xl rounded-full p-3 hover:bg-light-gray">
          <RiNotification3Line />
        </button>
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{' '}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
