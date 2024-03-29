import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../API";
import AllPosts from "./AllPosts";
import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { BsFillPostcardFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import "./Posts.scss";

const Posts = ({ setColor }) => {
  const [allPostData, setAllPostData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token === "" || token === null) {
      navigate("/");
    }
  }, []);

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    baseURL
      .get(
        "/post",
        Object.assign(
          {},
          {
            headers: {
              "X-Auth-Token": token,
              "content-type": "application/json",
            },
          }
        )
      )
      .then((res) => {
        
        setAllPostData(res.data);
        setColor("light");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="full_post_container">
      <div className="post_outer_div">
        <section className="post">
          <AllPosts allPostData={allPostData} />
        </section>
      </div>
      <div className="side_footer_profile">
        <a href="/dashboard">
          <AiTwotoneHome />
        </a>
        <a href="/">
          <BsFillPostcardFill />
        </a>
        <a href="/"><MdLocalPostOffice/></a>
        <a href="/">
          <CgProfile />
        </a>
        <a href="/">
          <CgMoreO />
        </a>
      </div>
    </div>
  );
};
export default Posts;
