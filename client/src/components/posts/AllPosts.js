import { RiDeleteBin6Fill } from "react-icons/ri";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import "./AllPosts.scss";
import { useEffect, useState } from "react";
import { postTimeFormating } from "../../utlis";
import DeletePost from "./DeletePost";

const AllPosts = ({ allPostData, getAllThePosts }) => {
  const [getid, setGetId] = useState();

  return allPostData.map((post) => {
    var timeAgo = postTimeFormating(post);

    return (
      <main key={post._id}>
        <article className="post_article">
          <div>
            <div className="flex items-center ">
              <div role="none" className="only_names">
                <a className="name_details_outer" href="/">
                  <div className="name_details">
                    <h3 className="font_details">{post.name}</h3>
                  </div>
                  <div className="time_dot">
                    <span className="span_time_dot">.</span>
                  </div>
                  <div className="time">
                    <time>{timeAgo}</time>
                  </div>
                </a>
              </div>
              <div role="none">
                <div className="delete_icon">
                  <RiDeleteBin6Fill onClick={() => setGetId(post._id)} />
                  {getid && <DeletePost id={getid} getAllThePosts={getAllThePosts}/>} 
                </div>
              </div>
            </div>
            <div className="article_outer">
              <div className="article_content">
                <p>{post.text}</p>
              </div>
            </div>
          </div>
          <div className="interaction">
            <div className="flex items-center ">
              <div className="items">
                <div className="like_icon">
                  <AiOutlineHeart />
                </div>
                <div className="comment_icon">
                  <TfiCommentsSmiley />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  });
};

export default AllPosts;
