import { JSX, useEffect } from 'react';
import { MdCancel } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: (string | JSX.Element)[]; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    isOpen && (
      <div
        id="modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={handleOutsideClick}
      >
        <div
          className="bg-zinc-900 p-4 rounded shadow-lg min-w-[15rem] overflow-x-visible border-1 border-purple-700"
          // style={{ boxShadow: '0 0 25px #7e22ce7d' }}
        >
          <div className='flex justify-between items-center'>
            <h2 className="text-lg font-bold">{title}</h2>
            <button onClick={onClose}><MdCancel color='#7e22ce' /></button>
          </div>
          <div className="mt-2 max-w-[30rem] max-h-[30rem] overflow-y-auto">
            {content.length > 0 ? (
              content.map((item, index) => (
                <div key={index}>
                  {typeof item === 'string' ? (
                    <p>{item}</p>
                  ) : (
                    item
                  )}
                </div>
              ))
            ) : (
              <p>Sin contenido.</p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;