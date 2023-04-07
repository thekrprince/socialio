import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import "./CreatePost.scss";

const CreatePost = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let token = sessionStorage.getItem('token');
        if(token === '' || token === null){
            navigate('/login');
        }
    },[]);

    return (
        <div>
          <Header/>
          <div >Welcome to SocialIO</div>
          <Link to="/login">Logout</Link>
        </div>
    );
};
export default CreatePost;