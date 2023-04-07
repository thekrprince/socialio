import { BsSearch } from "react-icons/bs";
import './Header.scss';

const Header = () => {
  return (
    <div className="header_outer">
        <input className="search" type="text" placeholder="Search..." />
        <BsSearch className="icon"/>
        <button className="button">Create Post</button>
        <button></button>
        
    </div>
  );
};

export default Header;
