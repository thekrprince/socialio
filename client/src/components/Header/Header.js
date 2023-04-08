import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import icon_girl from "../../assets/icons-female-user.svg";
import { useState } from "react";
import CreatePostModal from "../Modal/CreatePostModal";
import Card from "../UI/Card";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header_outer">
        <input className="search" type="text" placeholder="Search..." />
        <BsSearch className="search_icon" size={25} />
        <div className="post_icon_manage">
          <button
            className="create_post_button"
            onClick={() => setIsOpen(!isOpen)}
          >
            Create Post
          </button>
          <button className="profile_button">
            <img src={icon_girl} alt="profile" className="profile_icon" />
          </button>
        </div>
        <Card>
          <div className="portal">
            {isOpen && (
              <CreatePostModal
                setIsOpen={setIsOpen}
                onClose={() => setIsOpen(false)}
              >
                <div
                  className="modal_portal"
                  onClick={(e) => e.stopPropagation()}
                />
                <h1>Create Post</h1>
                <input type="textarea" />
                <button onClose={() => setIsOpen(false)}>Close</button>
              </CreatePostModal>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Header;
