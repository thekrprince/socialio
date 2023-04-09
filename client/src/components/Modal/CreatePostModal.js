import axios from "axios";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import Card from "../UI/Card";
import "./CreatePostModal.scss";

const Backdrop = ({ setIsOpen }) => {
  return <div className="backdrop" onClick={() => setIsOpen(false)}></div>;
};



const ModalOverlay = ({ setIsOpen }) => {
  const [postField, setPostField] = useState();

  const inputChangeHandler= (e) =>{
    setPostField(e.target.value);
  }
  console.log(postField);
  const token = sessionStorage.getItem('token');
  console.log(token);
  const postHandler = (e) => {
    e.preventDefault();
    axios.post("/post", {
      text: postField
    },
    {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  
  }

  return (
    <Card className="modal">
      <form onSubmit={postHandler}>
      <header className="header">
        <h2>Create Post</h2>
      </header>
      <div className="content">
        <textarea type="textarea" name="text" onChange={inputChangeHandler}/>
      </div>
      <footer className="action">
        <button>Post</button>
      </footer>
      </form>
      
    </Card>
  );
};

const CreatePostModal = ({ setIsOpen }) => {
    return (
        <React.Fragment>
            {createPortal(
                <Backdrop setIsOpen={setIsOpen}/>,
                document.getElementById('backdrop-root')
            )}
            {createPortal(
                <ModalOverlay setIsOpen={setIsOpen}/>,
                document.getElementById('overlay-root')
                )
            }
        </React.Fragment>
    );
};

export default CreatePostModal;
