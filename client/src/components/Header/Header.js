import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import icon_girl from "../../assets/icons-female-user.svg";

const Header = () => {
  return (
    <div className="header_outer">
      <input className="search" type="text" placeholder="Search..." />
      <BsSearch className="search_icon" size={25} />
      <div className="post_icon_manage">
        <button className="create_post_button">Create Post</button>
        <button className="profile_button">
          <img src={icon_girl} alt="profile" className="profile_icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
