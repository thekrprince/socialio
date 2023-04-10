import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../API';
import AllPosts from './AllPosts';
import "./CreatePost.scss";

const Posts = () => {
    const [allPostData, setAllPostData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let token = sessionStorage.getItem('token');
        if(token === '' || token === null){
            navigate('/');
        }
    },[]);
    
    const token = sessionStorage.getItem('token');
    // console.log(token);
    // const posts = () =>{
    useEffect(() => {
        baseURL.get("/post", Object.assign({ },
            {   
                headers:{
                    "X-Auth-Token": token,
                    "content-type" : "application/json"
                },
            })).then((res) => {
                // console.log(res);
                // console.log(res.data[0]);
                setAllPostData(res.data);
            }).catch((err) => {
                console.log(err)
            });
            // console.log("allpostdata", allPostData);
    },[])
    // }

    // posts();

    return (
        <div >
          <section>
            {/* <p>Welcome</p> */}
            <AllPosts allPostData={allPostData}/>
          </section>
        </div>
    );
};
export default Posts;