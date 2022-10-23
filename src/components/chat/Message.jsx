import React from "react"

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://static.vecteezy.com/system/resources/previews/002/399/634/original/v-letter-logo-business-template-icon-free-vector.jpg" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                {/* <img src="https://i.pinimg.com/originals/03/32/0d/03320d5d2bcc9a44c41e7cd04a94b006.jpg" alt="" /> */}
            </div>
        </div>
    )
}

export default Message