import React from "react"
import Message from "./Message"
import '../chat/Messages.jsx.css'

const Messages = () => {
    return (
        <div className="messages">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages