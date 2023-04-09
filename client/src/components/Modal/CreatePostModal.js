import React from "react";
import { createPortal } from "react-dom";
import Card from "../UI/Card";
import "./CreatePostModal.scss";

const Backdrop = ({ setIsOpen }) => {
  return <div className="backdrop" onClick={() => setIsOpen(false)}></div>;
};

const ModalOverlay = ({ setIsOpen }) => {
  return (
    <Card className="modal">
      <header className="header">
        <h1>Create Post</h1>
      </header>
      <div className="content">
        <input type="textarea" />
      </div>
      <footer className="action">
        <button onClick={() => setIsOpen(false)}>Close</button>
      </footer>
    </Card>
  );
};

const CreatePostModal = ({ setIsOpen, children, onClose }) => {
  //   if (!setIsOpen) return null;
  //   return createPortal(
  //     <div className="backdrop" onClick={onClose}>
  //       {children}
  //     </div>,
  //     document.getElementById("modal")
  //   );
//   <Card>
//     {/* <div className="portal">
//             {isOpen && (
//               <CreatePostModal
//                 setIsOpen={setIsOpen}
//                 onClose={() => setIsOpen(false)}
//               >
//                 <div
//                   className="modal_portal"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//                 <h1>Create Post</h1>
//                 <input type="textarea" />
//                 <button onClose={() => setIsOpen(false)}>Close</button>
//               </CreatePostModal>
//             )}
//           </div> */}
//   </Card>;
    return (
        <React.Fragment>
            {createPortal(
                <Backdrop setIsOpen={setIsOpen}/>,
                document.getElementById('backdrop-root')
            )}
            {createPortal(
                <ModalOverlay setIsOpen={setIsOpen}/>,
                document.getElementById('overlay-root')
                )
            }
        </React.Fragment>
    );
};

export default CreatePostModal;
