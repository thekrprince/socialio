const AllPosts = ({ id, name, text, date, allPostData }) => {
  // console.log(name);
//   console.log("all post", allPostData);
//   console.log("post length", allPostData.length);
//   console.log("all post", allPostData[0]);

  return(
    allPostData.map((post) => {
    // console.log("test", post.name);
    return(
    <div>
      <p>Welcome</p>
      <div>
        <p>Name: {post.name}</p>
      </div>
      <div>
        <p>Text: {post.text}</p>
      </div>
      <div>
        <p>Date : {post.date}</p>
      </div>
    </div>);
  }));
};

export default AllPosts;
