import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreatePost.scss';

const CreatePost = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let token = sessionStorage.getItem('token');
        if(token === '' || token === null){
            navigate('/');
        }
    },[]);
    return (
        <div>
          <div >Welcome to SocialIO</div>
          <Link to="/">Logout</Link>
        </div>
    );
};
export default CreatePost;