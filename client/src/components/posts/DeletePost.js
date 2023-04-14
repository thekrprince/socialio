import { useEffect, useState } from "react";
import { baseURL } from "../../API";

const DeletePost = ({ id, getAllThePosts }) => {
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    baseURL
      .delete(
        `/post/${id}`,
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
        getAllThePosts();
      })
      .catch((err) => {
        console.log(err);
      });
  },[id]);
};

export default DeletePost;
