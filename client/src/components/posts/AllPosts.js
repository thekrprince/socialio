import moment from "moment";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./AllPosts.scss";

const AllPosts = ({ allPostData }) => {

  return allPostData.map((post) => {
  let date = new Date()
  var dts = new Date(post.date);
  var split_Values= dts.toLocaleString().split(" ");
  var dates = split_Values[0];
  var times = split_Values[1];
  var then = dates + times
  var ms = moment.utc(moment(date,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
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
                  <span>.</span>
                  {/* <p>
                    <span> . </span>
                    <span className="time_span"> {timeAgo}</span></p> */}
                </div>
                <div className="time">
                  {timeAgo}
                </div>
              </div>
              <div role="none">
                <div><RiDeleteBin6Fill/></div>
              </div>

            </div>
            <div className="mt-4">
              <div className="article_content">

              <p>{post.text}</p>
              </div>
            </div>
          </div>
        </article>
        {/* <div className="allPosts_outer">
          <div className="allPosts_container">
            <div>
              <p>{post.name}</p>
            </div>
            <div>
              
            </div>
            <div>
              <p>Date : {post.date}</p>
            </div>
          </div>
        </div> */}
      </main>
    );
  });
};

export default AllPosts;
