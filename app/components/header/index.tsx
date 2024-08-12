import SearchIcon from "./../../../public/icons/SearchNormal1-Linear-32px.svg";
import Image from "next/image";
import logo from './../../../public/images/aa624316428cd4498ccd9769187ec302.png';
import { useState } from "react";

export interface HeaderProps {
  isModalOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isModalOpen }) => {

    const handleIconClick = () => {
    isModalOpen(true);
  };

  return (
    <div className="w-full h-[60px] bg-white border-b border-[#dee2e6] flex justify-between align-center pt-2.5 pl-2">
      <div className="w-[408px] h-[44px] pl-3 gap-3 rounded-lg border border-[#dee2e6] flex justify-start items-center text-[#727272]">
        <SearchIcon width={24} height={24} stroke="currentColor" />
        <input
          type="text"
          placeholder="Search tasks"
          className="focus:outline-none "
        />
      </div>
      <div className="rounded-2xl h-[44px] border border-[#F6F6F6] p-1 flex justify-center items-center mr-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleIconClick}
          className="cursor-pointer"
        >
          <path
            d="M2.5 5.83301H17.5"
            stroke="#1C1C1C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2.5 10H17.5"
            stroke="#1C1C1C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2.5 14.167H17.5"
            stroke="#1C1C1C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <Image
              className="rounded-full h-6 w-6"
              src={logo}
              alt="logo"
            />
      </div>
    </div>
  );
}

export default Header;
