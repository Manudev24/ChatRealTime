import React, {useContext} from "react"
import {signOut} from "firebase/auth"
import { auth } from "../../firebase"
import { AuthContext} from "../../context/AuthContext"

const NavbarUser = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className='NavbarUser'>
            <span className="logo">ChatRealTime</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span className="name">{currentUser.displayName}</span>
                <button onClick={()=> signOut(auth)}>SingOut</button>
            </div>
        </div>
    )
}

export default NavbarUser