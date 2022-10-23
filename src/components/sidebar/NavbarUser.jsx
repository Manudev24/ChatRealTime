import "../sidebar/NavbarUser.jsx.css"

const NavbarUser = () => {
    return (
        <div className='NavbarUser'>

            <span className="logo">ChatRealTime</span>
            <div className="user">
                <img src="https://static.vecteezy.com/system/resources/previews/002/399/634/original/v-letter-logo-business-template-icon-free-vector.jpg" alt="" />
                <span className="name">Victor</span>
                <button>SingOut</button>
            </div>
        </div>
    )
}

export default NavbarUser