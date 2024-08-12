import React from "react";

interface TaskHeaderProps {
  color: string;
  category: string;
}

const TaskHeader: React.FC<TaskHeaderProps> = ({ color, category }) => {
  return (
    <div className="w-full h-12 flex justify-between items-center rounded-lg bg-white text-black">
      <div className="w-1/2 flex">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="text-black ml-2">{category}</div>
        <div className="text-blue-500 ml-4">3</div>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-4"
      >
        <path
          d="M6 12H18"
          stroke="#1C1C1C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 18V6"
          stroke="#1C1C1C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default TaskHeader;
