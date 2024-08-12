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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div>
          <h2 className="text-xl font-bold">Modal Title</h2>
          <p>Your content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
