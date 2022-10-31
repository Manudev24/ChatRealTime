import { useState } from "react";
import { arrayUnion, updateDoc, doc, Timestamp, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";

const Input = () => {

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const [error, setError] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid);

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );

        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }
    };

    return (
        <div className="input">
            <input type="text" placeholder="Type something..." onChange={e => setText(e.target.value)} />
            <div className="send">
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/attach.png" alt="" />
                <input type="file" style={{ display: "none" }} id="file" onChange={e => setImg(e.target.files[0])} />
                <label htmlFor="file">
                    <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/img.png" alt="" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default Input