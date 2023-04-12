import "./AllPosts.scss";

const AllPosts = ({allPostData }) => {
  return allPostData.map((post) => {
    return (
      <div className="allPosts_outer">
        <div className="allPosts_container">
          <div>
            <p>Name: {post.name}</p>
          </div>
          <div>
            <p>Text: {post.text}</p>
          </div>
          <div>
            <p>Date : {post.date}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default AllPosts;
