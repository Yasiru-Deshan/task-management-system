import React from "react";
import Image from "next/image";
import userImage from "../../../public/images/d3b23d72a00d3748f19313b8e4134531.png";

const Task = () => {
  return (
    <div className="w-full rounded-lg bg-white mt-4 cursor-pointer">
      <div className="w-full h-12 flex justify-left items-center ml-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-black ml-4 focus:outline-none w-full mr-6 font-bold text-xl">
          Project setup and initial configurations
        </div>
        <hr className="text-[#474747]"></hr>
      </div>
      <div className="w-full h-16 flex justify-between items-center text-black ml-4">
        <p className="mt-4 mr-4 text-[#474747]">
          Pellentesque varius ante posuere risus pellentesque mollis. Curabitur
          ultricee...
        </p>
      </div>
      <div className="w-full h-12 flex justify-between items-center text-black ml-4 mt-2">
        <div className="flex justify-left items-center text-black">
          <div>
            <Image
              className="rounded-full h-8 w-8"
              src={userImage}
              alt="User Avatar"
            />
          </div>
          <div className="ml-2 bg-[#FCF4F4] p-2 text-red-500 rounded-xl text-sm">
            Aug 11
          </div>
        </div>
        <div className="ml-2 bg-[#FCF4F4] p-2 text-red-500 rounded-xl text-sm flex justify-between items-center mr-6">
          {" "}
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <circle cx="3" cy="3" r="3" fill="#CB2E27" />
          </svg>
          <p className="font-bold">High</p>
        </div>
      </div>
      <hr className="text-[#474747] mr-2 ml-2 mt-2"></hr>
      <div className="w-full h-12 flex justify-left items-center ml-4">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6667 7.99967C14.6667 11.6797 11.68 14.6663 8.00004 14.6663C4.32004 14.6663 1.33337 11.6797 1.33337 7.99967C1.33337 4.31967 4.32004 1.33301 8.00004 1.33301C11.68 1.33301 14.6667 4.31967 14.6667 7.99967Z"
            stroke="#474747"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.4733 10.1202L8.40663 8.88684C8.04663 8.6735 7.7533 8.16017 7.7533 7.74017V5.00684"
            stroke="#474747"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="text-[#474747] ml-4  w-full mr-6 text-sm">
          Should complete within 6 days
        </div>
      </div>
    </div>
  );
};

export default Task;
