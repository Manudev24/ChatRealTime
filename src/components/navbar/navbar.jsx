import React from "react"
const navbar = () => {

    return (
        <div className='nav'>
            <div className='nav-header'>
                <div className='nav-title'>
                    ChatRealTime
                </div>
            </div>
            <div className='nav-body'>
                <ul>
                    <li className='nav-item'>
                        <a href="#0">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="https://github.com/Manudev24/ChatRealTime">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}
export default navbar