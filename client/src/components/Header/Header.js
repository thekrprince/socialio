import { BsSearch } from "react-icons/bs";
import './Header.scss';

const Header = () => {
  return (
    <div className="header_outer">
        <input className="search" type="text" />
        <BsSearch />
        <button>Create Post</button>
    </div>
  );
};

export default Header;
