import { createPortal } from "react-dom";

const CreatePostModal = ({ setIsOpen, children, onClose }) => {
  if (!setIsOpen) return null;
  return createPortal(
    <div className="backdrop" onClick={onClose}>
      {children}
    </div>,
    document.getElementById("modal")
  );
  
};

export default CreatePostModal;
