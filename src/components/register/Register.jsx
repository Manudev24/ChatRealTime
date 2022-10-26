import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";


const Register = () => {

    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, fullName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (error) => {
                    setError(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            fullName,
                            photoURL:downloadURL,
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            fullName,
                            email,
                            photoURL: downloadURL
                        });
                    });
                }
            );


        } catch (error) {
            setError(true);
        }

    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatRealTime</span>
                <span className="title">Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png" alt="" />
                        <span>Add an imagen</span>
                    </label>
                    <button>Sing up</button>
                    {error && <span>Something went wrong</span>}
                </form>
                <p>Are you already registered? Login</p>
            </div>
        </div>
    )
}

export default Register;