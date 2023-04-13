import moment from "moment";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { baseURL } from "../../API";
import "./AllPosts.scss";
import { useEffect } from "react";

const AllPosts = ({ allPostData }) => {
  const [deletePost, setDeletePost] = ([]);

  const token = sessionStorage.getItem("token");

  const deleteHandler = (id) => {
    console.log("id", id);
    baseURL.delete(`/post/${id}`, Object.assign(
      {},
      {
      headers: {
        "X-Auth-Token": token,
        "content-type": "application/json",
        }
      }
     ) 
    ).then((res) => {
      // setDeletePost(deletePost.filter((postdel) => {
      //   return postdel.id !== id;
      // })
        console.log(res);
      }).catch((err) => {
          console.log(err);
      });
  }

  

  return allPostData.map((post) => {
    let date = new Date();
    var dts = new Date(post.date);
    var split_Values = dts.toLocaleString().split(" ");
    var dates = split_Values[0];
    var times = split_Values[1];
    var then = dates + times;
    var ms = moment
      .utc(
        moment(date, "DD/MM/YYYY HH:mm:ss").diff(
          moment(then, "DD/MM/YYYY HH:mm:ss")
        )
      )
      .format("HH:mm:ss");
    var d = moment.duration(ms);
    var timeAgo = d.humanize();

    return (
      <main>
        <article className="post_article" key={post._id}>
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
                  <RiDeleteBin6Fill onClick={deleteHandler(post._id)} />
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
