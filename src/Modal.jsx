import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";

export const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
