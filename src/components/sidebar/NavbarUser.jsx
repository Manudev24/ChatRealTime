import React from "react"
import {signOut} from "firebase/auth"
import { auth } from "../../firebase"

const NavbarUser = () => {
    return (
        <div className='NavbarUser'>

            <span className="logo">ChatRealTime</span>
            <div className="user">
                <img src="https://static.vecteezy.com/system/resources/previews/002/399/634/original/v-letter-logo-business-template-icon-free-vector.jpg" alt="" />
                <span className="name">Victor</span>
                <button onClick={()=> signOut(auth)}>SingOut</button>
            </div>
        </div>
    )
}

export default NavbarUser