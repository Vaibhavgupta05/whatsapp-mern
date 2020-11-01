import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLargeOutlined';
import {Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className= 'sidebar'>
            <div className= "sidebar_header">
                <Avatar src= "https://media-exp1.licdn.com/dms/image/C4E03AQGMlyadWAFfmQ/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=CQJ93nKSSBAEqv6-_oGZNDCo7dO_EoTSu3HyxUHJm4s"/>
                <div className= "sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className= "sidebar_search">
                <div className= "sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder= "Search or start a new chat" type="text" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
