import React, { useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase"
import { async } from "@firebase/util";

const Search = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState("");

    const handleSearch = async () => {

        const q = query(collection(db, "users"), where("displayName", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });


        } catch (err) {
            setErr(true);
        }
    };

    const handlekey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    return (
        <div className="search">
            <div className="searchForm">
                <input
                    type="text"
                    placeholder="Find a User"
                    onKeyDown={handlekey}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </div>
            {err && <span>Without results</span>}
            {user && (<div className="userchat">
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>)
            }
        </div>
    );
};
export default Search