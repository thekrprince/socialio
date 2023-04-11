import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../API';
import AllPosts from './AllPosts';
import "./Posts.scss";

const Posts = ({setColor}) => {
    console.log("setColor", setColor);
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
                setColor('light');

            }).catch((err) => {
                console.log(err)
            });
            // console.log("allpostdata", allPostData);
    },[])
    // }

    // posts();

    return (
        <div className='test' >
          <section className='post'>
            {/* <p>Welcome</p> */}
            <AllPosts allPostData={allPostData}/>
          </section>
        </div>
    );
};
export default Posts;