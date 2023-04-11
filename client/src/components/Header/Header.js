import { useState } from "react";
import {Link} from "react-router-dom";
import CreatePostModal from "../Modal/CreatePostModal";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import icon_girl from "../../assets/icons-female-user.svg";
import logo from "../../assets/logo3.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const modalPostHandler = () => {
  //   setIsOpen(true);
  // };

  return (
    <>
      <div className="header_outer">
        <img src={logo} alt="logo" className="logo" />
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
          <Link to="/">Logout</Link>
        </div>
        
      </div>
      {isOpen && <CreatePostModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
