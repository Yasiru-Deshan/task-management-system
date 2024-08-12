import React, { DragEvent } from "react";
import Image from "next/image";
import userImage from "../../../public/images/d3b23d72a00d3748f19313b8e4134531.png";

interface TaskProps {
  id: number;
  type: string;
  title: string;
  priority: string;
  description: string;
  draggable?: boolean;
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: DragEvent<HTMLDivElement>) => void;
}

const Task: React.FC<TaskProps> = ({
  id,
  type,
  title,
  priority,
  description,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  return (
    <div
      className="w-full rounded-lg bg-white mt-4 cursor-pointer"
      draggable={draggable}
      onDragStart={(e) => onDragStart && onDragStart(e)}
      onDragOver={(e) => onDragOver && onDragOver(e)}
      onDrop={(e) => onDrop && onDrop(e)}
      data-id={id}
    >
      <div className="w-full h-12 flex justify-left items-center ml-4">
        {type === "Completed" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 1.66602C5.40841 1.66602 1.66675 5.40768 1.66675 9.99935C1.66675 14.591 5.40841 18.3327 10.0001 18.3327C14.5917 18.3327 18.3334 14.591 18.3334 9.99935C18.3334 5.40768 14.5917 1.66602 10.0001 1.66602ZM13.9834 8.08268L9.25841 12.8077C9.14175 12.9243 8.98342 12.991 8.81675 12.991C8.65008 12.991 8.49175 12.9243 8.37508 12.8077L6.01675 10.4493C5.77508 10.2077 5.77508 9.80768 6.01675 9.56602C6.25841 9.32435 6.65841 9.32435 6.90008 9.56602L8.81675 11.4827L13.1001 7.19935C13.3417 6.95768 13.7417 6.95768 13.9834 7.19935C14.2251 7.44102 14.2251 7.83268 13.9834 8.08268Z"
              fill="#2A7E2E"
            />
          </svg>
        ) : (
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <div className="text-black ml-4 focus:outline-none w-full mr-6 font-bold text-xl">
          {title}
        </div>
      </div>
      <hr className="text-[#474747] mr-2 ml-2 mt-2" />
      <div className="w-full h-16 flex justify-between items-center text-black ml-4 mt-2">
        <p className="mt-4 mr-4 text-[#474747]">{description}</p>
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
        <div
          className="ml-2 bg-[#FCF4F4] p-2 rounded-xl text-sm flex justify-between items-center mr-6"
          style={{
            color:
              priority === "High"
                ? "#CB2E27"
                : priority === "Medium"
                ? "#FFAD0D"
                : priority === "Low"
                ? "#0C6FBF"
                : undefined,
            backgroundColor:
              priority === "High"
                ? "#FCF4F4"
                : priority === "Medium"
                ? "#FFFAF2"
                : priority === "Low"
                ? "#F2F7FB"
                : undefined,
          }}
        >
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <circle
              cx="3"
              cy="3"
              r="3"
              fill={
                priority === "High"
                  ? "#CB2E27"
                  : priority === "Medium"
                  ? "#FFAD0D"
                  : priority === "Low"
                  ? "#0C6FBF"
                  : "#000000"
              }
            />
          </svg>
          <p className="font-bold">{priority}</p>
        </div>
      </div>
      <hr className="text-[#474747] mr-2 ml-2 mt-2" />
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
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.4733 10.1202L8.40663 8.88684C8.04663 8.6735 7.7533 8.16017 7.7533 7.74017V5.00684"
            stroke="#474747"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="text-[#474747] ml-4 w-full mr-6 text-sm">
          Should complete within 6 days
        </div>
      </div>
    </div>
  );
};

export default Task;
