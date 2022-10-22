import React from "react"
import NavbarUser from "./NavbarUser"
import '../sidebar/sidebar.jsx.css'
import Search from "../search/Search"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavbarUser />
            <Search />
        </div>
    )
}

export default Sidebar