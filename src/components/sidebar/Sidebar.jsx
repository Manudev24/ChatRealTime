import React from "react"
import NavbarUser from "./NavbarUser"
import '../sidebar/sidebar.jsx.css'
import Search from "../search/Search"
import Chats from "../chat/Chats"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavbarUser />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar