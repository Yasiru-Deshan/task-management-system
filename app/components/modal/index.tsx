import Table from "./table";
import TableRow from "./table";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end"
      onClick={handleOverlayClick}
    >
      <div className="w-[483px] h-full bg-white border border-gray-200 shadow-lg p-4 relative">
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button> */}

        <div className="w-full h-12 flex justify-between items-center text-black">
          <div className="p-2 rounded-xl border border-[#FCF4F4] text-sm flex justify-between items-center mr-6">
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
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="ml-2 cursor-pointer">Mark Complete</p>
          </div>
          <div className="flex justify-right items-center text-black mr-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 cursor-pointer"
            >
              <rect width="32" height="32" rx="8" fill="white" />
              <path
                d="M23.5 10.9831C20.725 10.7081 17.9333 10.5664 15.15 10.5664C13.5 10.5664 11.85 10.6497 10.2 10.8164L8.5 10.9831"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0835 10.142L13.2668 9.05033C13.4002 8.25866 13.5002 7.66699 14.9085 7.66699H17.0918C18.5002 7.66699 18.6085 8.29199 18.7335 9.05866L18.9168 10.142"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.7082 13.6162L21.1665 22.0079C21.0748 23.3162 20.9998 24.3329 18.6748 24.3329H13.3248C10.9998 24.3329 10.9248 23.3162 10.8332 22.0079L10.2915 13.6162"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6084 19.75H17.3834"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9165 16.417H18.0832"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
              className="cursor-pointer"
            >
              <path
                d="M12.0249 4.94141L17.0832 9.99974L12.0249 15.0581"
                stroke="#727272"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.9165 10H16.9415"
                stroke="#727272"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <hr className="text-[#474747] mr-2 ml-2 mt-2"></hr>

        <div className="text-black w-full mr-6 mt-4 font-bold text-2xl p-2 border border-[#FCF4F4] rounded-lg">
          Project setup and initial configurations
        </div>

        <div className="mt-4">
          <Table />
          <div className="ml-2 rounded-xl text-sm flex  items-center mt-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3334 8.33366V12.5003C18.3334 16.667 16.6667 18.3337 12.5001 18.3337H7.50008C3.33341 18.3337 1.66675 16.667 1.66675 12.5003V7.50033C1.66675 3.33366 3.33341 1.66699 7.50008 1.66699H11.6667"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3334 8.33366H15.0001C12.5001 8.33366 11.6667 7.50033 11.6667 5.00033V1.66699L18.3334 8.33366Z"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83325 10.833H10.8333"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83325 14.167H9.16659"
                stroke="#727272"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="p-2 flex ml-4 items-center text-[#727272] text-lg mt-[-4]">
              Description
            </p>
          </div>
        </div>
        <div className=" w-full mr-6 mt-4 p-3 border border-[#FCF4F4] text-[#727272] rounded-lg">
          This task involves setting up the project environment and configuring
          all necessary tools and frameworks to ensure smooth development. The
          steps include:
        </div>
      </div>
    </div>
  );
};

export default Modal;
