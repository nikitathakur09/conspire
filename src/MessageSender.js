import React,{useState}from 'react';

import "./MessageSender.css";
import {Avatar}  from "@material-ui/core";
import PhotoLibraryIcon  from "@material-ui/icons/PhotoLibrary";
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase'
function MessageSender() {
    const [{user} , dispatch] = useStateValue();
    const [input, setInput] = useState('');
   
const handleSubmit = (e) => {
  e.preventDefault();
 
  db.collection('posts').add({
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    profilePic: user.photoURL,
    username: user.displayName,
   
  })

  setInput("");};
    return (
        
        <div  className="MessageSender">
        
            < div className="MessageSender__top">
            <Avatar src={user.photoURL} />
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messageSender__input"
                placeholder={"WRITE YOUR CONSPIRACY THEORIES HERE....."}
                />
                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>
            </form>
            </div>
            <div className="MessageSender__bottom">
            <div className="MessageSender__option">
            <PhotoLibraryIcon style={{color: "brown"}} />
            <h3> ADD IMAGES</h3>
            </div>
        </div>
        </div>
    );
}

export default MessageSender;

