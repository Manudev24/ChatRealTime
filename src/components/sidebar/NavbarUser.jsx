import "../sidebar/NavbarUser.jsx.css"

const NavbarUser = () => {
    return (
        <div className='NavbarUser'>

            <span className="logo">ChatRealTime</span>
            <div className="user">
                <img src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="" />
                <span className="name">Victor</span>
                <button>SingOut</button>
            </div>
        </div>
    )
}

export default NavbarUser