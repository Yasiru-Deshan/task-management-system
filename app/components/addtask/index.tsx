import React from "react";

const AddTask = () => {
  return (
    <div className="w-full h-24 rounded-lg bg-white mt-4">
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
            stroke="#727272"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
            stroke="#727272"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input className="text-[#727272] ml-4 focus:outline-none w-full mr-6" placeholder="Write a task name" />
        <hr className="text-[#727272]" />
      </div>
      <div className="w-full h-12 flex justify-between items-center text-black ml-4">
        <div className="flex justify-left items-center text-black">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="36" height="36" rx="18" fill="white" />
          <rect
            x="1"
            y="1"
            width="36"
            height="36"
            rx="18"
            stroke="#C8C8C8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="3 3"
          />
          <path
            d="M18.9999 19.0003C21.3011 19.0003 23.1666 17.1348 23.1666 14.8337C23.1666 12.5325 21.3011 10.667 18.9999 10.667C16.6987 10.667 14.8333 12.5325 14.8333 14.8337C14.8333 17.1348 16.6987 19.0003 18.9999 19.0003Z"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.1582 27.3333C26.1582 24.1083 22.9499 21.5 18.9999 21.5C15.0499 21.5 11.8416 24.1083 11.8416 27.3333"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <rect x="1" y="1" width="36" height="36" rx="18" fill="white" />
          <rect
            x="1"
            y="1"
            width="36"
            height="36"
            rx="18"
            stroke="#C8C8C8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="3 3"
          />
          <path
            d="M15.6667 10.667V13.167"
            stroke="#727272"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.3333 10.667V13.167"
            stroke="#727272"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9167 16.5752H26.0834"
            stroke="#727272"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.5 16.0837V23.167C26.5 25.667 25.25 27.3337 22.3333 27.3337H15.6667C12.75 27.3337 11.5 25.667 11.5 23.167V16.0837C11.5 13.5837 12.75 11.917 15.6667 11.917H22.3333C25.25 11.917 26.5 13.5837 26.5 16.0837Z"
            stroke="#727272"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.0788 20.4167H22.0863"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.0788 22.9167H22.0863"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.9963 20.4167H19.0038"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.9963 22.9167H19.0038"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9118 20.4167H15.9193"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9118 22.9167H15.9193"
            stroke="#727272"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </div>
        <div className="border border-dashed p-1 text-[#727272] mr-6 rounded-lg">
            Set Priority
        </div>
      </div>
    </div>
  );
};

export default AddTask;
