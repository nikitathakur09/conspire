import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import {Avatar , IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';
function Header () {
    const [{user} , dispatch] = useStateValue();
    return (
    <div className="header">
        <div className="header__left">
            <img
            src ="./images/desc.png"
            alt=""
        />
        <div className="header__input">
            <SearchIcon
             fontSize ="large" />
            <input type="text" />
         </div>
         </div>
         <div className="header__center">
             <div className="header__option">  
            <HomeIcon 
            fontSize ="large"/>
             </div>
        </div>

        

        <div className="header__right">
            <div className="header__info">
                <Avatar src ={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon /> 
            </IconButton>
            <IconButton>
                <ForumIcon /> 
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon /> 
            </IconButton>
            <IconButton>
                <ExpandMoreIcon /> 
            </IconButton>
        </div>
    </div>
    );

}
export default Header;