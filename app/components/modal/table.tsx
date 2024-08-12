import React from "react";
import Image from "next/image";
import userImage from "../../../public/images/d3b23d72a00d3748f19313b8e4134531.png";
import Dropdown from "../dropdown";

const iconData = [
  {
    name: "status",
    icon: (
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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.75 12L10.58 14.83L16.25 9.17"
          stroke="#727272"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "duedate",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66675 1.66699V4.16699"
          stroke="#727272"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3333 1.66699V4.16699"
          stroke="#727272"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.91675 7.5752H17.0834"
          stroke="#727272"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z"
          stroke="#727272"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0788 11.4167H13.0863"
          stroke="#727272"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0788 13.9167H13.0863"
          stroke="#727272"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99632 11.4167H10.0038"
          stroke="#727272"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99632 13.9167H10.0038"
          stroke="#727272"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.91185 11.4167H6.91933"
          stroke="#727272"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.91185 13.9167H6.91933"
          stroke="#727272"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "assignee",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1666 5.83366C14.1666 8.13485 12.3011 10.0003 9.99992 10.0003C7.69873 10.0003 5.83325 8.13485 5.83325 5.83366C5.83325 3.53247 7.69873 1.66699 9.99992 1.66699C12.3011 1.66699 14.1666 3.53247 14.1666 5.83366Z"
          stroke="#727272"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.1582 18.3333C17.1582 15.1083 13.9499 12.5 9.99988 12.5C6.04988 12.5 2.84155 15.1083 2.84155 18.3333"
          stroke="#727272"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "priority",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.29175 1.66699V18.3337"
          stroke="#727272"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.29175 3.33301H13.6251C15.8751 3.33301 16.3751 4.58301 14.7917 6.16634L13.7917 7.16634C13.1251 7.83301 13.1251 8.91634 13.7917 9.49967L14.7917 10.4997C16.3751 12.083 15.7917 13.333 13.6251 13.333H4.29175"
          stroke="#727272"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const Table = () => {
  return (
    <>
      {iconData.map((icon) => (
        <tr key={icon.name}>
          <td>
            <div className="ml-2 rounded-xl text-sm flex justify-between items-center mt-4">
              {icon.icon}
              <p className="p-2 flex ml-4 items-center text-[#727272] text-lg mt-[-4]">
                {icon.name}
              </p>
            </div>
          </td>
          {icon.name === "duedate" && (
            <td>
              <div className="ml-10 p-2 rounded-xl text-sm flex justify-between items-center mr-6">
                <p className="ml-2 cursor-pointer text-red-500 text-lg font-bold">
                  11 August 2024
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4"
                >
                  <path
                    d="M5.8335 14.7163L14.7168 5.83301"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.7168 14.7163L5.8335 5.83301"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
          )}
          {icon.name === "status" && (
            <td>
              <div className="ml-11 p-2 rounded-xl text-sm flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="yellow"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="cursor-pointer text-[#000] text-lg font-bold ml-2">
                  To do
                </p>
              </div>
            </td>
          )}
          {icon.name === "assignee" && (
            <td>
              <div className="ml-12 p-2 rounded-xl text-sm flex justify-between items-center mr-6">
                <div>
                  <Image
                    className="rounded-full h-8 w-8"
                    src={userImage}
                    alt="User Avatar"
                  />
                </div>
                <p className="ml-2 cursor-pointer text-[#000] text-lg font-bold">
                  John Taylor
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4"
                >
                  <path
                    d="M5.8335 14.7163L14.7168 5.83301"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.7168 14.7163L5.8335 5.83301"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
          )}
          {icon.name === "priority" && (
            <td>
              <Dropdown />
            </td>
          )}
        </tr>
      ))}
    </>
  );
};

export default Table;
