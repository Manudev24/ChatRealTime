import React from "react"
import '../chat/Chat.jsx.css'

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png" alt="" />
                    <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png" alt="" />
                    <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Chat