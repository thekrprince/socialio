import moment from "moment";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { TfiCommentsSmiley } from "react-icons/tfi";
import "./AllPosts.scss";

const AllPosts = ({ allPostData }) => {
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
        <article className="post_article">
          <div>
            <div className="flex items-center ">
              <div role="none" className="only_names">
                <a className="name_details_outer" href=""></a>
                <div className="name_details">
                  <h3 className="font_details">{post.name}</h3>
                </div>
                <div className="time_dot">
                  <span className="span_time_dot">.</span>
                </div>
                <div className="time">
                  <time>{timeAgo}</time>
                </div>
              </div>
              <div role="none">
                <div>
                  <RiDeleteBin6Fill />
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
                <div className="like"><FcLike/></div>
                <div className="comment"><TfiCommentsSmiley/></div>
              </div>
            </div>

          </div>
        </article>
      </main>
    );
  });
};

export default AllPosts;
