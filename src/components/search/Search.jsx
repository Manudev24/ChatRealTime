import React from "react"
import '../search/search.jsx.css'

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a User" />
            </div>
            {/*<div className="userchat">
                <img src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="" />
                <div className="userChatInfo">
                    <span>Jhon</span>
                </div>
            </div>
    */}
        </div>
    )
}

export default Search